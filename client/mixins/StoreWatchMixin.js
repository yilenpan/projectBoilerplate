export default (cb, Store) => {
  return {
    getInitialState () {
      return cb();
    },
    componentWillMount () {
      Store.addChangeListener(this._onChange)
    },
    componentWillUnmount () {
      Store.removeChangeListener(this._onChange)
    },
    _onChange () {
      this.setState(cb())
    }
  };
};
