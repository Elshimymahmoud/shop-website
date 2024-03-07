import { useState } from "react";
import "./Header.css"
const Header = () => {

const [toggle,settoggle]=useState(false);


    return (
        <header className="header ">
            <div className="header-top text-light w-100 p-3 h-50 d-flex justify-content-between flex-row-reverse fs-5  p-3  align-items-center " >
                <div onClick={() => {
                         settoggle(true);
                    }}  className="header-top-menu">
                    <i class="bi bi-list menue fs-1  d-block" ></i>

                </div>
                <div className="header-top-logo ">
                    <p>Welcome to site..</p> </div>
                <div className="header-top-phone fs-5 d-none d-sm-none d-lg-block" >
                    <i class="bi bi-telephone-fill p-2"></i>
                    51555515
                </div>
            </div>
            <div className="header-middle d-flex  flex-xs-wrap-reverse justify-content-between flex-row fs-5  p-3  align-items-center ">
                <div className="header-middle-cart d-flex position-relative ps-5">
                    <i class="bi bi-cart pe-3 fs-3" id="cart">
                        <span class="position-absolute  translate-middle badge ms-2 rounded-pill bg-danger">
                            1

                        </span> </i>
                </div>
                <div className="header-middle-search " > <nav class="navbar ">
                    <div class="container-fluid" >
                        <form class="d-flex " role="search">
                            <input class="form-control position-relative" type="search" placeholder="what do you want?" aria-label="Search" />
                            <button class="btn btn-outline-success position-absolute  search   end-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav></div>
            
            </div>
            <div className="header-bottom   d-flex justify-content-center align-items-center "  style={{right:toggle && "230px"}} >
                <div className="header-bottom-close" onClick={() => settoggle(false)
                    
                }><i class="bi bi-x d-none"></i></div>
                <div className="header-bottom-left">
                    <ul class="nav">
                        <li class="nav-item pe-5 ">
                            <a class="nav-link  "  onClick={() => settoggle(false)
                    
                }aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item pe-3 ">
                            <a class="nav-link "  onClick={() => settoggle(false)
                    
                }href="#">Electronoics and mobile</a>
                        </li>
                        <li class="nav-item pe-3 ">
                            <a class="nav-link "onClick={() => settoggle(false)
                    
                } href="#">Home and kitchen</a>
                        </li>
                        <li class="nav-item pe-3 ">
                            <a class="nav-link "onClick={() => settoggle(false)
                    
                } aria-disabled="true">For Men</a>
                        </li>
                        <li class="nav-item pe-3 ">
                            <a class="nav-link " onClick={() => settoggle(false)
                    
                } aria-disabled="true">For Women</a>
                        </li>
                    </ul></div>
                <div className="header-bottom-right d-flex  pt-2 me-4 fs-5 " > 
                <div className="header-bottom-right-logo pe-2 fs-5 " onClick={() => settoggle(false)
                    
                }><i class="bi bi-person-circle"></i></div>
                <p >Login</p>
                </div>
            </div>
        </header>

    );

}
export default Header;