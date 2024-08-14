import heroImage2 from '../../assets/heroImage.jpg'

const Hero = () => {
    return (
        <div>

            <div className="hero bg-base-200 text-white min-h-screen" style={{
            backgroundImage : `url(${heroImage2})`
        }}>
                <div className="hero-content text-center poppins ">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Discover Your Perfect Style</h1>
                        <p className="py-6 text-2xl font-medium">
                        Shop the latest trends with exclusive offers just for you.
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;