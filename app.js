/**
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading"></h1>
 *          <h1 id="heading"></h1>
 *      </div>
 *      <div id="child2">
 *          <h1 id="heading"></h1>
 *          <h1 id="heading"></h1>
 *      </div>
 * </div>
 */

const root = ReactDOM.createRoot(document.getElementById("root"))

const div = React.createElement("div", { id: "parent" }, 
    [
        React.createElement("div", { id: "child" }, 
            [
                React.createElement("h1", { id: "heading" }, "I'm an h1 tag.!"),
                React.createElement("h2", { id: "heading" }, "I'm an h2 tag.!")
            ]
        ),
        React.createElement("div", { id: "child2" }, 
            [
                React.createElement("h1", { id: "heading" }, "I'm an h1 tag.!"),
                React.createElement("h2", { id: "heading" }, "I'm an h2 tag.!")
            ]
        )
    ]
)

root.render(div)