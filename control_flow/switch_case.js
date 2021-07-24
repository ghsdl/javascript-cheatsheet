let role = 'moderator'; // let role; or let role = 'guest'; 

// switch & case is another way to do if...else

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    
    case 'moderator':
        console.log('Moderator user');
        break;
    
    default:
        console.log('Unknown role');
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown user');