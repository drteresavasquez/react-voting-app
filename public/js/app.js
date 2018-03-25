class ProductList extends React.Component {
    render() {
      return (
        <div className='ui unstackable items'>
         <Product />
        </div>
      );
    }
  }
  
  class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src='images/products/image-aqua.png' />
          </div>
          <div className='middle aligned content'>
            <div className='description'>
              <a>Fort Knight</a>
              <p>Authentic renaissance actors, delivered in just two weeks.</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src='images/avatars/daniel.jpg'
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
//   We need to instruct React to render this ProductList inside a specific DOM node. The code below does this.
  ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
  );
