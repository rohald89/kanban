import useWindowSize from "../../hooks/useWindowSize";
import Button from "../shared/Button";

const Header = () => {
  const {width} = useWindowSize();

  return (
    <header className="flex bg-white items-center p-4">
        <img src="../../assets/logo-light.svg" alt="" />
        <h2 className="heading-lg">Platform Launch</h2>

    </header>
  )
}
export default Header
