// Navigation section
function createLinks() {
    class Links extends React.Component {
        constructor(props) {
            super(props);
            console.log("Links component created");
        }

        render() {
            return (
                React.createElement("nav", { }, 
                    React.createElement("ul", { }, 
                        React.createElement("li", {}, 
                            React.createElement("a", {href : this.props.index}, "HOME")),
                        React.createElement("li", {},
                            React.createElement("a", {href : this.props.projects}, "PROJECTS")),
                    )
                )
            )
        }
    }

    const rootElement = 
        React.createElement("div", { }, 
            React.createElement(
                Links, {
                    index : "index.html",
                    projects : "projects.html",
                }
            )
        );

    ReactDOM.render(rootElement,
        document.getElementById("nav")
    );
}

// Code for the Projects page
function startProjects() {
    // Defines the format for a github project
    class GithubProject extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                React.createElement("div", {}, 
                    React.createElement("a", {href : this.props.github}, 
                        React.createElement("h2", { }, this.props.githubProjectTitle)
                    ),
                    React.createElement("img", {
                        src : this.props.imgsrc,
                        alt : this.props.alt,
                        width : this.props.width
                    }, )
                )
            )
        }
    }

    const antymology = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Antymology",
                    githubProjectTitle : "Antymology",
                    imgsrc : "https://user-images.githubusercontent.com/23039052/112792181-33f54f80-9020-11eb-8be4-9b1f77475be2.gif",
                    alt : "Antymology",
                    width : "50%"
                }
            )
        );

    const totc = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Tragedy-of-the-Commons",
                    githubProjectTitle : "Tragedy of the Commons",
                    imgsrc : "https://user-images.githubusercontent.com/23039052/114950993-6d480080-9e11-11eb-83b3-6cf84a9e1d05.png",
                    alt : "totc",
                    width : "50%"
                }
            )
        );

    const quidditch = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Quidditch",
                    githubProjectTitle : "Quidditch",
                    imgsrc : "https://user-images.githubusercontent.com/23039052/109377458-c91df080-7888-11eb-8f0d-c9e1f5b99f66.gif",
                    alt : "quidditch",
                    width : "50%"
                }
            )
        );

    const wasps = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Wasp-Stigmurgy",
                    githubProjectTitle : "Wasps",
                    imgsrc : "https://user-images.githubusercontent.com/23039052/115159569-0dd83380-a051-11eb-9269-6044cba62808.gif",
                    alt : "wasps",
                    width : "50%"
                }
            )
        );
                

    ReactDOM.render(antymology,
        document.getElementById("antymology")
    );

    ReactDOM.render(totc,
        document.getElementById("totc")
    );

    ReactDOM.render(quidditch,
        document.getElementById("quidditch")
    );

    ReactDOM.render(wasps,
        document.getElementById("wasps")
    );
}

function createFooter() {
    class Footer extends React.Component {
        constructor(props) {
            super(props);
            console.log("Footer component created");
        }

        render() {
            return (
                React.createElement("footer", { }, 
                    React.createElement("address", {}, 
                        React.createElement("h3", { },
                            React.createElement("ul", { },
                                React.createElement("li", { },
                                    React.createElement("a", { href: this.props.github}, "https://github.com/CT-Clark")
                                ),
                                React.createElement("li", { }, this.props.email),
                                React.createElement("li", { }, this.props.phoneNumber)
                            )
                        )
                    )
                )
            )
        }
    }

    const rootElement = 
        React.createElement(
            Footer, {
                github : "https://github.com/CT-Clark",
                email : "cody.t.clark@protonmail.com",
                phoneNumber : "(403) 402-1822"
            }
        );

    ReactDOM.render(rootElement,
        document.getElementById("footer")
    );
}