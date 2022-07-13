import React from 'react'


const initials =(fullName)=> {
    const tabName = fullName.split(' ');
    const initials = tabName.shift().charAt(0) + tabName.pop().charAt(0);
    return initials.toUpperCase();
}


const CardUser = ({user}) => {
  return (
    <div>
        <div>  { initials(user.name)} </div>
        <h3>{user.name}</h3>
            <h4>  {user.username}</h4>
            <h5>company: {user.company.name}</h5>
            <h5>{user.company.catchPhrase}</h5>
            <h5>{user.company.bs}</h5>

            <ul>
            <li>{user.email} </li>
            <li> {user.address.street}-{user.address.suite}-{user.address.city}-{user.address.zipcode} </li>
            <li>{user.address.geo.lat}/{user.address.geo.lng}</li>
            <li>{user.phone} </li>
            <li>   {user.website}  </li>
            </ul>
    </div>
  )
}

export default CardUser