import { AmortisationOverview } from 'components'
import { connect } from 'react-redux'
import {
    getAmortisation,
    getAmortisationError,
    getAmortisationLoading
} from 'store/amortisation/selectors'

const mapStateToProps = (state: any) => ({
    amortisation: getAmortisation(state),
    isLoading: getAmortisationLoading(state),
    error: getAmortisationError(state)
})

export default connect(mapStateToProps)(AmortisationOverview)
