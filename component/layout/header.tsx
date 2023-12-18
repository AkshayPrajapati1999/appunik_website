/* eslint-disable @next/next/no-img-element */
import { useState, useEffect,useRef } from "react";
import newlogo from "../../images/New Web.png";
import Link from "next/link";
import Image from "next/image";
import {Box,Tab} from "@mui/material";
import {TabContext,TabList,TabPanel} from "@mui/lab";
import { IHeaderPanel, IHeaderPanelList } from "../../models/header.model";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import panelsData from "../../data/panels.json";
import mobileScreenPanelData from "../../data/panel.json"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function Header() {
  const [scroll, setScroll] = useState(false);
  const [value, setValue] = useState("0");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const theme: any = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleBackButton = () => {
    setShowMobileMenu(false);
  
  };

 const panels :IHeaderPanel[]=panelsData.panels
 const panelList :IHeaderPanelList[]=mobileScreenPanelData.panelList

  return (
    <>
      <header
        className={
          scroll ? "main_header_area navbar_fixed" : "main_header_area"
        }
      >
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">
            <Link className="logo" href="/">
              <Image src={newlogo} alt="logo" priority />
            </Link>
          </div>
          <button
      
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar_supported"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse navbar_supported">
            <ul className="navbar-nav">
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/">Home</Link>
              </li>
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/portofolio">Portfolio</Link>
              </li>
              {smallScreen ? (
                <div className="mobile-view-container">
                  <p onClick={toggleMobileMenu}>Services</p>

                  {showMobileMenu ? (
                    <div className="mobile-menu-container">
                      <ul className="dropdown-menu-mobile">
                        <span onClick={handleBackButton}>
                          <svg
                            viewBox="0 0 96 96"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title />
                            <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
                          </svg>
                        </span>
                        {panelList && panelList.map((listItem: any, listItemIndex: number) => (
                                      <div
                                        key={listItemIndex}
                                        className="list-item"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                      >
                                        <img
                                          src={listItem.image}
                                          alt={listItem.imageInfo}
                                        />
                                        <a
                                          href={listItem.to}
                                          className="list-title"
                                        >
                                          {listItem.list}
                                        </a>
                                      </div>
                                    )
                                  )}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : (
                <li className="dropdown ">
                <Link href="/service"  className="listitem">Services</Link>
                <ul className="dropdown-menu">
                  <TabContext value={value.toString()}>
                    <Box sx={{}}>
                      <TabList
                        onChange={handleChange}
                        orientation={smallScreen ? "horizontal" : "vertical"}
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: "var(--lightcolor)",
                          },
                        }}
                        sx={{
                          marginRight: "16px",
                          "& .MuiTab-root": {
                            minWidth: "auto",
                            marginBottom: "25px",
                            "&.Mui-selected": {
                              // fontWeight: 'bold',
                            },
                          },
                        }}
                      >
                        {panels &&
                          panels.map((panel, index) => (
                            <Tab
                              key={index}
                              label={
                                <div className="list_item_wrapper">
                                  <div>
                                  <img src={panel.icon} alt={panel.iconinfo} />
                                  {panel.label}
                                  </div>
                                  <div className="list_item_wrapper_arrow">

                                    <ArrowRightIcon/>
                                  </div>
                                </div>
                              }
                              value={String(index)}
                              />  
                          ))}
                          
                      </TabList>
                    </Box>
                    {panels &&
                      panels.map((panel, index) => (
                        <TabPanel key={index} value={String(index)}> 
                          <ul className="list_container">
                            {panel.lists &&
                              panel.lists.map((listItem, listItemIndex) => (
                                <div
                                  key={listItemIndex}
                                  className="list-item"
                                  data-toggle="collapse"
                                  data-target=".navbar-collapse.show"
                                >
                                  <img
                                    src={listItem.image}
                                    alt={listItem.imageInfo}
                                  />
                                  <a href={listItem.to} className="list-title">
                                    {listItem.list}
                                  </a>
                                </div>
                              ))}
                          </ul>
                        </TabPanel>
                      ))}
                  </TabContext>
                </ul>
              </li>
              )}

              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/hire-developers"> Hire Developers</Link>
              </li>

              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/about"> About Us</Link>
              </li>

              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/career">Career</Link>
              </li>

              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
