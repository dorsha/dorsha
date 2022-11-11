import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';

const App = () => {
	const el = useRef(null);
	const [typedFinished, setTypedFinished] = useState(false);

	useEffect(() => {
		const typed = new Typed(el?.current || '', {
			strings: [
				'^1500Hi^1500',
				'My name is\nDoron Sharon^1500',
				'You can call me\ndorsha^200'
			],
			typeSpeed: 40,
			backSpeed: 40,
			loop: false,
			onComplete: () => {
				setTypedFinished(true);
			}
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="container">
			<div>
				<div>
					<section>
						<p className="h2">
							<span ref={el} />
							<span id="header" className="typed" />
							<span id="header-cursor" className="typed-cursor">
								|
							</span>
						</p>
					</section>
					<div className={!typedFinished ? 'hidden' : 'fade-in'}>
						<div>
							<section>
								<i className="fa fa-heart-o fa-4x" />
								<p className="h3">
									I&apos;m a Software Engineer from Israel, with passion for
									security, programming languages, architecture, UX and working
									with customers.
									<br />
									<br />
									My current position is a Co-Founder at{' '}
									<a
										href="https://descope.com"
										target="_blank"
										rel="noreferrer"
									>
										{' '}
										Descope
									</a>
									.<br />
									<br />
									After three years as Chief Architect at
									<a
										href="https://jobs.paloaltonetworks.com"
										target="_blank"
										rel="noreferrer"
									>
										{' '}
										Palo Alto Networks
									</a>
									, three years as Chief Architect (Founding team) at
									<a
										href="https://www.demisto.com"
										target="_blank"
										rel="noreferrer"
									>
										{' '}
										Demisto
									</a>{' '}
									which got acquired by Palo Alto Networks, and six years at HP
									Software R&D.
									<br />I also love my life Zohar and Naomi, travelling, and
									sports.
								</p>
							</section>
							<section>
								<i className="fa fa-graduation-cap fa-4x" />
								<p className="h3">
									I studied Computer Science (BA) at the Interdisciplinary
									Center (IDC) academic institution in Herzliya.
								</p>
							</section>
							<section>
								<i className="fa fa-lightbulb-o fa-4x" />
								<p className="h3">
									I love pursuing side projects to learn new things.
								</p>
								<ul>
									<li>
										<a
											href="https://incidents-attack.firebaseapp.com"
											target="_blank"
											rel="noreferrer"
										>
											Incidents Attack - ReactJS Game
										</a>
									</li>
									<li>
										<a
											href="http://cloudslang.io"
											target="_blank"
											rel="noreferrer"
										>
											CloudSlang
										</a>
									</li>
									<li>
										<a
											href="https://wombat.factcenter.org"
											target="_blank"
											rel="noreferrer"
										>
											Wombat - Innovative cryptographic voting system
										</a>
									</li>
									<li>
										<a
											href="https://medium.com/@dorsha"
											target="_blank"
											rel="noreferrer"
										>
											Smart Login Modal with ReactJS and Redux
										</a>
									</li>
									<li>
										<a
											href="https://medium.com/@dorsha/implement-login-modal-with-redux-reselect-and-reactjs-668c468bcbe3#.vfc5xeg49"
											target="_blank"
											rel="noreferrer"
										>
											My Blog
										</a>
									</li>
								</ul>
							</section>
							<section>
								<i className="fa fa-comments-o fa-4x" />
								<p className="h3">
									My work experience is on{' '}
									<a
										href="http://il.linkedin.com/in/doronsharon"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa fa-linkedin-square fa-2x" />
									</a>{' '}
									and{' '}
									<a
										href="https://github.com/dorsha"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa fa-github fa-2x" />
									</a>
									, we can also chat via{' '}
									<a
										href="mailto:doron@dorsha.com"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa fa-envelope fa-2x" />
									</a>
									.
								</p>
							</section>
						</div>
						<div className="footer">
							<p style={{ float: 'left' }}>
								<span className="glyphicon glyphicons-luggage" /> Doron Sharon
								(dorsha){' '}
								<a
									href="https://twitter.com/DoronSharon"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-twitter fa-2x" />
								</a>
							</p>
							<p style={{ float: 'right' }}>
								<a
									href="mailto:doron@dorsha.com"
									target="_blank"
									rel="noreferrer"
								>
									doron@dorsha.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
