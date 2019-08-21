import React  from 'react';

export default function Home (){

  return (
    <div className="container">
    <div className="row background-image">
        <div className="col-sm vertical-col-sm">
            <div className="avatar"></div>
            <p className="hello-world">Hello World!</p>
        </div>
        <div className="col-sm vertical-col-sm">
            <p className="avatar-description">My name is Vlad Palii. <br/> Senior Javascript Developer.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm">
            <h2>
                Overall
            </h2>
            <p className="short-description">Over the past five years I've worked in several medical companies as a front-end developer with a different amount of technologies. There is some of them:
                Vanilla JS, ES5, ES6, JQuery, AngularJS, Angular 2+, PolymerJS, Three JS, React JS, Webpack, Gulp, QUnit, Karma, UML, OOP, Design Patterns, Overall product design, Design Documentation.</p>
        </div>
        <div className="col-sm">
            <h2>Contacts</h2>
            <div>
                <ul className="short-description contacts">
                    <li>
                        <a className="icon-linkedin"
                           target="_blank"
                           href="https://www.linkedin.com/in/vladpalii/">Vlad Palii</a>
                    </li>
                    <li>
                        <a className="icon-github"
                           target="_blank"
                           href="https://github.com/vladyslav-palii">vladyslav-palii</a>
                    </li>
                    <li>
                        <a className="icon-mail"
                           href="mailto:paliy.work@gmail.com">paliy.work@gmail.com</a>
                    </li>
                    <li>
                        <a className="icon-phone"
                           href="tel:+380639822792">+380639822792</a>
                    </li>
                    <li>
                        <a className="icon-skype"
                           href="skype:paliy.work?chat">paliy.work</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-sm">
            <h2>Experience</h2>
            <div className="short-description">
                <h5>Senior JS Developer @ Pavilion Health (2018 - Present):</h5>
                <small>Enterprise application developing (Medical).</small>
                <p>
                    Using: Vanilla JS, ES5, ES6, JQuery, AngularJS, Angular 2+, PolymerJS, Three JS, React JS, Vue JS, OOP, Design patterns.<br/>
                    Building the app through the: Webpack, Gulp, with help NPM, Bower, Yarn and unit-testing with Karma, QUnit.
                </p>
                <p>
                    When I started to work here, the current huge medical project was in a battered condition. Completely bad codebase without any comments, without design or requirement documentation, without access to previous developers. Nothing. But I've coped with it. Now a huge part of application redesigned,  and a lot of legacy code fixed. Not from scratch, step by step, all fixed. UI interface renewed. Added unit testing, and linked with CircleCI environment. And the customer is happy!
                </p>
            </div>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col-sm">
            <div className="short-description">
                <h5>Middle JS Developer @ Materialise NV (2016 - 2018):</h5>
                <small>I've worked on medical project, linked with visual planning of surgeon operations on humans knee and shoulders. Here I've took part in development of 3-D scenes, and related UI elements and tools. </small>
                <p>
                    Using: Vanilla JS, Three JS, jQuery, AngularJS, Polymer JS, OOP, Design Patterns.<br/>
                    Unit-testing with: Karma, QUnit.
                </p>
                <p>
                    That job was a really serious thing. Huge medical 3D single page application, written with help
                    of vanillaJS and threeJS librarys. From another side - typical enterprise software development w/o any freedom. Here i've leared a lot, how to write code, and how to not write code.
                    The achievement here that this complicated, millions of dollars software which was written with great quality.
                </p>
            </div>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col-sm">
            <div className="short-description">
                <h5>Junior JS Developer @ Lanet Network (2014 - 2016):</h5>
                <small>Design and development of Smart TV & Android TV applications.</small>
                <p>
                    Using: Vanilla JS, AngularJS, jQuery.<br/>
                    Unit-testing with: Protractor.
                </p>
                <p>
                    I've been involved in designing full vision and main idea of this project, and developing a lot of things, like UX features and UI parts of application.
                    <br/><br/>
                    I'm proud that i was responsible for all process of design from zero to ready for use product. Choosing key technologies, and methodologies, it was really cool to think about all parts of future of this project - about future users, and benefits from application.
                    <br/><br/>
                    Conclusion:
                    I've learned a lot about how make something great from zero to ready for use product, about self-education and self-development of dev skills, to making my best on this work.
                    <br/><br/>
                    The main thing what i found out on this position, it's self-organization, when business gives you time and money, you should know how rightly spend these resources.
                </p>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm">
            <h2>Other</h2>
            <div className="short-description">
                Overall tech stack && tools:
                <ul>
                    <li>Back-end stack, familiar with: C#/.NET/Razor, Java/Spring, rbenv/Ruby/Ruby on Rails, mysql/mongo/Redis.</li>
                    <li>Management: TFS/Atlassian/UML/etc.</li>
                    <li>Platforms: Linux/Windows/Docker.</li>
                    <li>Code management: Git/TFS.</li>
                    <li>Editors: JetBrains IDEs/Visual Studio.</li>
                </ul>
                Other partial responsibilities and activities:
                <ul>
                    <li>overall application design planning.</li>
                    <li>design documentation.</li>
                    <li>tasks decomposition.</li>
                    <li>sprints planning.</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-sm">
            <h2>The Story</h2>
            <div className="short-description">
                The first program I wrote when I was 14 years old, it was a ".bat" simulation of computer terminal from Fallout 2 game.
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-sm">
            <h2>Personal</h2>
            <div className="short-description">
                I am an amateur and at my free time as possible interested in arduino electronics,
                 mechanical engineering, space engineering, etc. Also a big fan of travel. And now it's more than 10 countries on my count.
            </div>
        </div>
    </div>

    <div className="row">

        <div className="col-sm">
            <h2>
                Education
            </h2>

            <div className="short-description">
                <h5>Kyiv National University</h5>
                <small>Master’s Degree in Computer Science.</small>
            </div>

        </div>

    </div>
  </div>
  )

}