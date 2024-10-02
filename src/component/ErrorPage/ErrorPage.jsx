import img from '../../assets/404.gif';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <img src={img} alt="404" className='w-2/3 h-[400px]'/>
        </div>
    );
};

export default ErrorPage;