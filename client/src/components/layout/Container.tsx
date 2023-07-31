type Props = {
    children?: React.ReactNode;
};

const Container = ( props: Props ) => {
    return (
        <div className="max-w-5xl mx-auto">
            { props.children }
        </div>
    )
}

export default Container;