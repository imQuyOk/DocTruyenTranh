import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Context  from '../state/Context';
import storage from '../utils';


function Login() {
    const { setIsLogin, setUser } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
    
            const data = await response.json();
            setIsLogin(true);
            setUser(data.user);
            storage.set('user', data.user);
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Đăng nhập thất bại!');
        }
        console.log('Login với:', { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Nhập</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition"
                    >
                        Đăng Nhập
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Chưa có tài khoản?{' '}
                    <Link to="/register" className="text-indigo-600 hover:underline">
                        Đăng Ký
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
