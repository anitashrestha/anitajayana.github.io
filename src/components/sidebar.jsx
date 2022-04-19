import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav
						href="#navbar"
						className="js-colorlib-nav-toggle colorlib-nav-toggle"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar"
					>
						<i />
					</nav>
					<aside id="colorlib-aside" className="border js-fullheight">
						<div className="text-center">
							<div
								className="author-img"
								style={{ backgroundImage: "url(images/about.jpg)" }}
							/>
							<h1 id="colorlib-logo">
								<a href="index.html">Anita Jayana</a>
							</h1>
							<span className="email">
								<i className="icon-mail"></i> anje12sth@gmail.com
							</span>
						</div>
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="collapse">
								<ul>
									<li className="active">
										<a href="#home" data-nav-section="home">
											Introduction
										</a>
									</li>
									<li>
										<a href="#about" data-nav-section="about">
											About
										</a>
									</li>
									{/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
									<li>
										<a href="#timeline" data-nav-section="timeline">
											Timeline
										</a>
									</li>
									<li>
										<a href="#skills" data-nav-section="skills">
											Skills
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id="colorlib-main-menu">
							<ul>
								<li>
									<a
										href="https://www.instagram.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-instagram" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/anita-jayana/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-linkedin2" />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/anitashrestha"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-github"></i>
									</a>
								</li>
								<li>
									<a
										href="https://medium.com/@sthanje"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="icon-blogger2"></i>
									</a>
								</li>
							</ul>
						</nav>
						<div className="colorlib-footer">
							<p>
								<small>Feel free to contact me for any work.</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}
