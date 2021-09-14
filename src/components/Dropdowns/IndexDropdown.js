import React , {useEffect} from "react";
import { Link as LinkDefault } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useTranslation } from "react-i18next";

const IndexDropdown = () => {
  
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
 
  const { t } = useTranslation();


  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (dropdownPopoverShow && popoverDropdownRef.current && !popoverDropdownRef.current.contains(e.target)) {
        setDropdownPopoverShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {t("pages")}
      </a>
      
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        <LinkDefault
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block max-w-210-px min-w-48 whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Dashboard
        </LinkDefault>
        <LinkDefault
          to="/admin/settings"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Settings
        </LinkDefault>
        <LinkDefault
          to="/admin/tables"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tables
        </LinkDefault>
        <LinkDefault
          to="/admin/maps"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Maps
        </LinkDefault>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        <LinkDefault
          to="/app"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Login
        </LinkDefault>
        <LinkDefault
          to="/signup"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Register
        </LinkDefault>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          No Layout
        </span>
        <LinkDefault
          to="/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Profile
        </LinkDefault>

        
      </div>
    </>
  );
};

export default IndexDropdown;
