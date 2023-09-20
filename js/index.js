const quantities = {
    'quantity-value-1': 0,
    'quantity-value-2': 0,
    'quantity-value-3': 0,
    'quantity-value-4': 0,
    'quantity-value-5': 0,
    'quantity-value-6': 0,
    'quantity-value-7': 0,
    'quantity-value-8': 0,
    'quantity-value-9': 0,
    'quantity-value-10': 0,
    'quantity-value-11': 0,
    'quantity-value-12': 0,
    'quantity-value-13': 0,
    'quantity-value-14': 0,
    'quantity-value-15': 0,
    'quantity-value-16': 0,
    'quantity-value-17': 0,
    'quantity-value-18': 0,
    'quantity-value-19': 0,
    'quantity-value-20': 0,
    'quantity-value-21': 0,
    'quantity-value-22': 0,
    'quantity-value-23': 0,
    'quantity-value-24': 0,
    'quantity-value-25': 0,
    'quantity-value-26': 0,
    'quantity-value-27': 0,
    'quantity-value-28': 0,
    'quantity-value-29': 0,
    'quantity-value-30': 0,
    'quantity-value-31': 0,
    'quantity-value-32': 0,
    'quantity-value-33': 0,
    'quantity-value-34': 0,
    'quantity-value-35': 0,
    'quantity-value-36': 0,
    'quantity-value-37': 0,
    'quantity-value-38': 0,
    'quantity-value-39': 0,
    'quantity-value-40': 0,
    'quantity-value-41': 0,
    'quantity-value-42': 0,
    'quantity-value-43': 0,             
    'quantity-value-45': 0,
    'quantity-value-46': 0,
    'quantity-value-47': 0,
    'quantity-value-48': 0,
    'quantity-value-49': 0,
    'quantity-value-50': 0,              
    'quantity-value-52': 0,
    'quantity-value-53': 0,
    'quantity-value-54': 0,
    'quantity-value-55': 0,
    'quantity-value-56': 0,
    'quantity-value-57': 0,
    // Add more items and quantity IDs as needed
};



function changeQuantity(elementId, amount) {
    quantities[elementId] += amount;
    if (quantities[elementId] < 0) {
        quantities[elementId] = 0; // Ensure quantity is not negative
    }
    updateQuantityDisplay(elementId);
}

function updateQuantityDisplay(elementId) {
const quantitySpan = document.getElementById(elementId);
const quantityCell = document.getElementById(elementId + '-cell');
const jnumberCell = document.getElementById('jnumber-value-' + elementId.substring(elementId.lastIndexOf('-') + 1));
quantitySpan.textContent = quantities[elementId];
quantityCell.textContent = quantities[elementId];
jnumberSpan.textContent = jnumber[elementId];
jnumberCell.textContent = jnumber[elementId];
jnumberCell.textContent = document.getElementById('jnumber').value || 'jnumber';

const returnIssueValue = document.getElementById('returnIssue').value;
if (returnIssueValue === 'return') {
    quantities[elementId] = Math.abs(quantities[elementId]);
} else {
    quantities[elementId] = Math.abs(quantities[elementId]) * -1;
}
}
function updateQuantities() {
    for (const key in quantities) {
        updateQuantityDisplay(key);
    }
}

function downloadExcel() {
const returnIssueValue = document.getElementById('returnIssue').value;

const workbook = XLSX.utils.book_new();
const sheetData = [
['Item Name', 'Job Site', 'Quantity'],


['Vacuums', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-1'] : -quantities['quantity-value-1']],
['Vacuum Accessories Set', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-2'] : -quantities['quantity-value-2']],
['Vacuum Bags',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-3'] : -quantities['quantity-value-3']],
['25 Extension Cords', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-4'] : -quantities['quantity-value-4']],
['50 Extension Cords', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-5'] : -quantities['quantity-value-5']],


['100 Extension Cords', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-6'] : -quantities['quantity-value-6']],
['Single GFI', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-7'] : -quantities['quantity-value-7']],
['3-way GFCI', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-8'] : -quantities['quantity-value-8']],
['Tile Puller', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-9'] : -quantities['quantity-value-9']],
['Wet Floor Signs', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-10'] : -quantities['quantity-value-10']],


['Cones', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-11'] : -quantities['quantity-value-11']],
['Barricades', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-12'] : -quantities['quantity-value-12']],
['Mop Sticks', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-13'] : -quantities['quantity-value-13']],
['Mop Bucket', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-14'] : -quantities['quantity-value-14']],
['Mop Wringer', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-15'] : -quantities['quantity-value-15']],


['Mop Heads', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-16'] : -quantities['quantity-value-16']],
['Rise', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-17'] : -quantities['quantity-value-17']],
['Knee Pads', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-18'] : -quantities['quantity-value-18']],
['Headlight', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-19'] : -quantities['quantity-value-19']],
['Flashlight', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-20'] : -quantities['quantity-value-20']],


['Spare Batteries', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-21'] : -quantities['quantity-value-21']],
['Scrapers', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-22'] : -quantities['quantity-value-22']],
['Sponges', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-23'] : -quantities['quantity-value-23']],
['Swiffer Refills',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-24'] : -quantities['quantity-value-24']],
['Swiffer extensions', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-25'] : -quantities['quantity-value-25']],


['Trash Can/Wheels', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-26'] : -quantities['quantity-value-26']],
['Trash Bags', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-27'] : -quantities['quantity-value-27']],
['5-Gallon Buckets', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-28'] : -quantities['quantity-value-28']],
['Microfiber Packs', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-29'] : -quantities['quantity-value-29']],
['Flat Sticks', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-30'] : -quantities['quantity-value-30']],


['Uline Clean Wipes',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-31'] : -quantities['quantity-value-31']],
['Q-Tips', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-32'] : -quantities['quantity-value-32']],
['Anti-Static Brushes', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-33'] : -quantities['quantity-value-33']],
['Greased lightning', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-34'] : -quantities['quantity-value-34']],
['Alcohol Gallon',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-35'] : -quantities['quantity-value-35']],


['Perfecto', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-36'] : -quantities['quantity-value-36']],
['Staticide Gallon',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-37'] : -quantities['quantity-value-37']],
['Simple Green', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-38'] : -quantities['quantity-value-38']],
['Heavy Duty Citrus Degreaser', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-39'] : -quantities['quantity-value-39']],
['Goo Gone',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-40'] : -quantities['quantity-value-40']],


['Nitrile Gloves', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-41'] : -quantities['quantity-value-41']],
['Tape Roll', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-42'] : -quantities['quantity-value-42']],
['Door Magnets', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-43'] : -quantities['quantity-value-43']],
['Chains', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-45'] : -quantities['quantity-value-45']],
['Locks', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-46'] : -quantities['quantity-value-46']],


['Ladder 6 ft',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-47'] : -quantities['quantity-value-47']],
['Ladder 8 ft',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-48'] : -quantities['quantity-value-48']],
['Ladder 10 ft',document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-49'] : -quantities['quantity-value-49']],
['Ladder 12 ft', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-50'] : -quantities['quantity-value-50']],
['Platform Ladder 8 ft', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-52'] : -quantities['quantity-value-52']],


['Platform Ladder 10 ft', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-53'] : -quantities['quantity-value-53']],
['Nitrile Gloves small', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-54'] : -quantities['quantity-value-54']],
['Nitrile Gloves medium', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-55'] : -quantities['quantity-value-55']],
['Nitrile Gloves large', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-56'] : -quantities['quantity-value-56']],
['Nitrile Gloves extra large', document.getElementById('jnumber').value, returnIssueValue === 'return' ? quantities['quantity-value-57'] : -quantities['quantity-value-57']],



[ document.getElementById('name').value],
];

const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const now = new Date();
    const filename = `table_data_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}.xlsx`;

    XLSX.writeFile(workbook, filename);
}

function searchItems() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('.style');

    items.forEach(item => {
        const itemName = item.querySelector('.container-img p').textContent.toLowerCase();
        if (itemName.indexOf(filter) > -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}    