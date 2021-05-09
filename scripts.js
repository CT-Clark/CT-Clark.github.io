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
    class GithubProject extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                React.createElement("a", {href : this.props.github}, 
                    React.createElement("h2", { }, this.props.githubProjectTitle))
            )
        }
    }

    const antymology = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Antymology",
                    githubProjectTitle : "Antymology"
                }
            )
        );

    const totc = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Tragedy-of-the-Commons",
                    githubProjectTitle : "Tragedy of the Commons"
                }
            )
        );

    const quidditch = 
        React.createElement("div", { }, 
            React.createElement(
                GithubProject, {
                    github : "https://github.com/CT-Clark/Quidditch",
                    githubProjectTitle : "Quidditch"
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