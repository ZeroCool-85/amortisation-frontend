import { AmortisationTable } from 'components'
import { connect } from 'react-redux'
import { getAmortisation } from 'store/amortisation/selectors'

const mapStateToProps = (state: any) => ({
    amortisation: getAmortisation(state)
});

export default connect(mapStateToProps)(AmortisationTable)
