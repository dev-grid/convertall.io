import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export function SiteFooter() {
  return (
    <footer className="py-6 px-16 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-md leading-loose text-muted-foreground md:text-left">
          Built with <span className="text-red-600"> </span> by victorpreston
        </p>
        <div className="space-x-6 flex items-center">
        <Link
          href={"https://x.com/_victorpreston"}
          target="_blank"
        >
          <BsTwitterX  className="w-5 h-5 text-muted-foreground" />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/victor-preston/"}
          target="_blank "
        >
          <FaLinkedin className="w-5 h-5 text-muted-foreground" />
        </Link>
        </div>
      </div>
    </footer>
  );
}
