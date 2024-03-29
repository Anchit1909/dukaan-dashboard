function Footer() {
  return (
    <footer className="h-12 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex justify-center text-gray-700">
          <p className="text-lg md:text-base">
            Developed by{" "}
            <a
              className="font-semibold underline-offset-4 transition-colors hover:underline"
              href="https://github.com/Anchit1909"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anchit Sinha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
