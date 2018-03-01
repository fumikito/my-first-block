/*!
 * wp
 *
 *
 */

/* global:wp true */

const { registerBlockType } = wp.blocks;

function renderTable( csv ){

}

registerBlockType( 'myplugin/csv-block', {

  title: 'CSV',

  icon: 'editor-table',

  category: 'common',

  attributes: {
    csv: {
      type: 'string',
      default: '',
      source: 'text',
      selector: 'td',
    }
  },

  edit: ( props ) => {

    let csv = props.attributes.csv;

    /**
     * CSVを更新する
     *
     * @param {Event} event
     */
    function inputHandler( event ) {
      props.setAttributes( { csv: event.target.value } );
    }

    return (
      <textarea value={csv} onChange={inputHandler} />
    );
  },

  save: ( props ) => {
    let lines = props.attributes.csv.split("\n");
    return (
      <table>
        { lines.map((line) => {
          let cells = line.split(',');
          return (
            <tr>
              { cells.map((cell) => {
                return <td>{cell}</td>
              })}
            </tr>
          )
        })}
      </table>
    )
  }
} );
