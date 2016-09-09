
var Nodelist = React.createClass({
    render: function() {
        var name = this.props.name;
        return (
            <ul>
                {
                    React.Children.map(this.props.children, function(child) {
                        return <li className={name}> {child} </li>;
                    })
                }
            </ul>
        );
    }
});

ReactDOM.render(
    <Nodelist name="masdy">
        <span>list1</span>
        <span>list2</span>
    </Nodelist>
    ,
    document.querySelector('#example')
);

