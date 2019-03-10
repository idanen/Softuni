import React from 'react'

const Footer =() =>{

    return(
        <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p className="mb-4">
                <img src="images/img_1.jpg" alt="placeholder" className="img-fluid" />
              </p>
              <p>Lorem ipsum dolor sit amet sa ksal sk sa, consectetur adipisicing elit. Ipsa harum inventore reiciendis.
                <a href="#">Read More</a></p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="row">
                <div className="col-md-7">
                  <h3>Latest Posts</h3>
                  <div className="post-entry-sidebar">
                    <ul>
                      <li>
                        <a href=''>
                          <img src="images/img_6.jpg" alt="placeholder" className="mr-4" />
                          <div className="text">
                            <h4>How to Find the Video Games of Your Youth</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span> •
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src="images/img_3.jpg" alt="placeholder" className="mr-4" />
                          <div className="text">
                            <h4>How to Find the Video Games of Your Youth</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span> •
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href=''>
                          <img src="images/img_4.jpg" alt="placeholder" className="mr-4" />
                          <div className="text">
                            <h4>How to Find the Video Games of Your Youth</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span> •
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-1" />
                <div className="col-md-4">
                  <div className="mb-5">
                    <h3>Social</h3>
                    <ul className="list-unstyled footer-social">
                      <li><a href="#"><span className="fa fa-twitter" /> Twitter</a></li>
                      <li><a href="#"><span className="fa fa-facebook" /> Facebook</a></li>
                      <li><a href="#"><span className="fa fa-instagram" /> Instagram</a></li>
                      <li><a href="#"><span className="fa fa-vimeo" /> Vimeo</a></li>
                      <li><a href="#"><span className="fa fa-youtube-play" /> Youtube</a></li>
                      <li><a href="#"><span className="fa fa-snapchat" /> Snapshot</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="small">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                © 2019 
                Atanas Yonkov | Template by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};
export default Footer;