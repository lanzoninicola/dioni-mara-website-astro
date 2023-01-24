import { Link } from "@remix-run/react";

export default function LogoWhite() {
  return (
    <Link to="/">
      <img
        src="/assets/images/logo-white.svg"
        alt="Logo Dioni Mara Yoga e Terapias"
      />
    </Link>
  );
}
