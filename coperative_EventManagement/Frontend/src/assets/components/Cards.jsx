import { Panel } from 'rsuite'
import PropTypes  from 'prop-types'
const Cards = ({name,content,Image}) => {
  return (
    <Panel shaded bordered bodyFill style={{ display: 'inline', width: 240 }}>
    <img src={Image} height="240" />
    <Panel header={name}>
      <p>
        <small>
           {content}
        </small>
      </p>
    </Panel>
    </Panel>
  )
  
}
Cards.propTypes={
  name:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
  Image:PropTypes.string.isRequired
}
export default Cards;