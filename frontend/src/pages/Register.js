import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault(); //Ngăn không cho trang reload khi form được submit.
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp!');
            return;
        }

        try {
            //Gửi một yêu cầu POST tới route /api/users/register của backend với dữ liệu email và password. Đây là nơi gửi yêu cầu đăng ký người dùng tới server.
            const res = await axios.post('http://localhost:4000/api/users/register', {
                email,
                password,
            });
            console.log(res.data);
            alert('Đăng ký thành công!');
        } catch (err) {
            console.error(err);
            alert('Đăng ký thất bại!');
        }

        console.log('Đăng ký với:', { email, password });
        // Xử lý logic đăng ký ở đây
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Ký</h2>
                <form onSubmit={handleRegister} className="space-y-5">
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Xác Nhận Mật Khẩu</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition"
                    >
                        Đăng Ký
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Đã có tài khoản?{' '}
                    <Link to="/login" className="text-indigo-600 hover:underline">
                        Đăng Nhập
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
