/*!
 * wp
 *
 *
 */

/* global:wp true */

const { registerBlockType } = wp.blocks;

function RandomImage( category ) {

  const src = 'http://lorempixel.com/400/200/' + category;

  return <img src={ src } alt={ category } />;
}

registerBlockType( 'myplugin/random-image', {

  title: 'Random Image',

  icon: 'format-image',

  category: 'common',

  attributes: {
    category: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img',
    }
  },

  edit: ( props ) => {

    let category = props.attributes.category;


    function setCategory( event ) {
      const selected = event.target.querySelector( 'option:checked' );
      props.setAttributes( { category: selected.value } );
      event.preventDefault();
    }

    return (
      <form onSubmit={ setCategory }>
      { category ? <RandomImage category={ category } /> : null }
    <select onChange={ setCategory }>
      <option value="sports">Sports</option>
      <option value="animals">Animals</option>
      <option value="nature">Nature</option>
      </select>
      </form>
    );
  },

  save: ( props ) => {
    return <RandomImage category={ props.attributes.category } />;
  }
} );
