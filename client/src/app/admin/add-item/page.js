"use client" 
import CustomForm from '../../components/customsForm/page';
import Appbar from '../../components/Appbar/page'
const AddItems = ()=> {
    const formItems = [
        {label:'Item Name', type:'text'}, 
        {label:'Item Color', type:'text'}, 
        {label:'Item Brand', type:'text'},
        {label:'Item Price', type:'Number'},
        {label:'Item Description', type:'text'}, 
        {label:'Item Image', type:'file' },
    ]
    return (
        <div>
            <Appbar/>
            Add items
            <CustomForm formItems={formItems} apiEndpoint="/item"/>
        </div>
    )
}
export default AddItems