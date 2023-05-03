function Wrapper(props) {
  return <div className="row row-cols-4 text-center ">{props.children}</div>;
}

export default Wrapper;
