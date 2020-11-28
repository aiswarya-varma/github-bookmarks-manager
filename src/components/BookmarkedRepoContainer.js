import { connect } from 'react-redux';
import ViewBookmarkedRepos from './BookmarkedRepos.js';
import { addRepo, removeRepo } from '../actions/index.js';

const mapStateToProps = (state) => {
    return {
        repositories: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addRepoToView: (data) => dispatch(addRepo(data)),
        removeRepoFromView: (data) => dispatch(removeRepo(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBookmarkedRepos);