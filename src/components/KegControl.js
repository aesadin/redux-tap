import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id) // this deletes the selected keg
      .concat(kegToEdit); // replace
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleSellingPint = (id) => { 
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id)[0];
      if (selectedKeg.pintsInKeg > 0) {
        const soldPint = Object.assign({}, selectedKeg, {pintsInKeg: selectedKeg.pintsInKeg - 1})
        const editedMasterKegList = this.state.masterKegList
          .filter(keg => keg.id !== id)
          .concat(soldPint);
        this.setState({
        masterKegList: editedMasterKegList,
        })
      }
  }

  // add method to adjust number of pints in keg onclick of "sell pint" button

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onCLickingEdit = {this.handleEditCLick} onClickingSell = {this.handleSellingPint}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection = {this.handleChangingSelectedKeg} onSellPintSelection = {this.handleSellingPint}/>;
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
