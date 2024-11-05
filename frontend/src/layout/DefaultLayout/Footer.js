
function Footer() {
    return (
        <div className='mt-[64px] bg-[#3f3f3f] lg:p-[32px] mobile:px-[16px] mobile:py-[48px]'>
            <div className='flex justify-between gap-[32px] lg:flex-row mobile:flex-col'>
                <div className='lg:w-[50%] mobile:w-full text-[#fff]'>
                    <h4 className='text-2xl font-[600] mb-[24px]'>
                        Nguồn truyện tranh
                        <a className='text-[#e4d71c] font-[600] ml-[8px] hover:underline' target="_blank" rel="noreferrer" href='https://otruyen.cc/'>Nhóm 17</a>
                    </h4>
                    <p className='text-lg text-justify'>Tất cả truyện tranh đều được tổng hợp từ nhiều nguồn uy tín và đáng tin cậy nhằm mang đến cho bạn kho nội dung phong phú và chất lượng nhất. Chúng tôi luôn tôn trọng quyền sở hữu trí tuệ và cố gắng đảm bảo rằng tất cả các tác phẩm đều tuân thủ quy định về bản quyền. Nếu bạn là tác giả hoặc đại diện pháp lý và nhận thấy nội dung nào trên trang web vi phạm bản quyền, xin vui lòng liên hệ với chúng tôi. Chúng tôi cam kết sẽ xem xét và giải quyết vấn đề một cách nhanh chóng và hợp lý, đảm bảo quyền lợi chính đáng của tất cả các bên liên quan.</p>
                </div>
                <div className='lg:w-[25%] mobile:w-full text-[#fff]'>
                    <h4 className='text-2xl font-[600] mb-[24px]'>
                        Liên hệ với tôi
                    </h4>
                    <div className='flex flex-col gap-[12px]'>
                        <a href='' target="_blank" rel="noopener" className='text-xl hover:text-[#e4d71c] duration-300'>
                            <i className="mr-[8px] fa-brands fa-square-facebook"></i>
                            Facebook
                        </a>
                        <a href='' target="_blank" rel="noopener" className='text-xl hover:text-[#e4d71c] duration-300'>
                            <i className="mr-[8px] fa-brands fa-github"></i>
                            Github
                        </a>
                        <a href='' target="_blank" rel="noopener" className='text-xl hover:text-[#e4d71c] duration-300'>
                            <i className="mr-[8px] fa-brands fa-telegram"></i>
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-[48px] font-[600] text-[#fff] text-center'>
                <p className='mb-[8px]'>Tôi cung cấp web đọc truyện miễn phí, nên các bạn hãy tôn trọng công sức và công sức của tôi. Xin cảm ơn!</p>
                <span className='text-xl text-[#e4d71c]'>Bản quyền thuộc Nhóm 17</span>
            </div>
        </div>
    );
}

export default Footer;