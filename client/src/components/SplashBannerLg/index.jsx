const SplashBannerLg = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="relative lg:w-4/5 h-64 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczN9FHbAXeKbWT_34vismQ5PJwavB8hUU1fEzZ-WkN7EnssKCrQNg34yM9NCpgXFTvHW8UqyK0iJTJotKzai71kh2-TQtpDCEz0iD_eA11VsfPGQQnisqWcnifKgyxpvDnJxFfx9Fwi1RnBATq2Cp_lm=w2932-h832-s-no-gm"
          alt="Splash Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 pr-16 py-4">
          <h2 className="text-white text-4xl font-bold">Artist of the Month</h2>
        </div>
      </div>
    </div>
  );
};

export default SplashBannerLg;
