const contacts=(object,array)=>{
    object.contacts=[...array];
    return object;
}
export const show_contacts=({contacts})=>contacts.toString();

export default contacts;