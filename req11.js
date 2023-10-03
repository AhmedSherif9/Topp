<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Packages Management</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            text-align: center;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            max-width: 600px;
        }

        .package {
            margin: 20px 0;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            text-align: left;
        }

        .package h2 {
            color: #007acc;
        }

        .package p {
            margin: 10px 0;
        }

        .button {
            padding: 10px 20px;
            margin: 10px;
            background-color: #007acc;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #005b9f;
        }

        /* Styling for the dropdown */
        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 100px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 5px;
        }

        .dropdown-content button {
            padding: 10px;
            width: 100%;
            text-align: left;
            border: none;
            background: none;
            cursor: pointer;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Health Packages Management</h1>
        <div class="package">
            <h2>Silver Package</h2>
            <p><strong>Price:</strong> 3600 LE per year</p>
            <p><strong>Discounts:</strong></p>
            <ul>
                <li>40% off any doctor's session price</li>
                <li>20% off any medicine ordered from the pharmacy platform</li>
                <li>10% discount on the subscription of any family members in any package</li>
            </ul>
            <button class="button" id="update-silver">Update</button>
            <button class="button" id="delete-silver">Delete</button>
        </div>
        <div class="package">
            <h2>Gold Package</h2>
            <p><strong>Price:</strong> 6000 LE per year</p>
            <p><strong>Discounts:</strong></p>
            <ul>
                <li>60% off any doctor's session price</li>
                <li>30% off any medicine ordered from the pharmacy platform</li>
                <li>15% discount on the subscription of any family members in any package</li>
            </ul>
            <button class="button" id="update-gold">Update</button>
            <button class="button" id="delete-gold">Delete</button>
        </div>
        <div class="package">
            <h2>Platinum Package</h2>
            <p><strong>Price:</strong> 9000 LE per year</p>
            <p><strong>Discounts:</strong></p>
            <ul>
                <li>80% off any doctor's session price</li>
                <li>40% off any medicine ordered from the pharmacy platform</li>
                <li>20% discount on the subscription of any family members in any package</li>
            </ul>
            <button class="button" id="update-platinum">Update</button>
            <button class="button" id="delete-platinum">Delete</button>
        </div>

        <!-- Add button with dropdown menu -->
        <div class="package">
            <h2>Add Package</h2>
            <div class="dropdown">
                <button class="button" id="add-button">Add</button>
                <div class="dropdown-content">
                    <button class="add-package-button" id="add-silver">Silver</button>
                    <button class="add-package-button" id="add-gold">Gold</button>
                    <button class="add-package-button" id="add-platinum">Platinum</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Function to handle adding a new package
        function addPackage(packageName) {
            alert('Adding ' + packageName + ' Package');
        }

        // Event listener for the "Add" button
        document.getElementById('add-button').addEventListener('click', function() {
            // Toggle the visibility of the dropdown menu
            var dropdownContent = document.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });

        // Event listeners for each "Add Package" button in the dropdown menu
        document.getElementById('add-silver').addEventListener('click', function() {
            addPackage('Silver');
        });

        document.getElementById('add-gold').addEventListener('click', function() {
            addPackage('Gold');
        });

        document.getElementById('add-platinum').addEventListener('click', function() {
            addPackage('Platinum');
        });

        // Event listeners for existing "Update" and "Delete" buttons (similar to your code)
        document.getElementById('update-silver').addEventListener('click', function() {
            alert('Updating Silver Package');
        });

        document.getElementById('delete-silver').addEventListener('click', function() {
            alert('Deleting Silver Package');
        });

        document.getElementById('update-gold').addEventListener('click', function() {
            alert('Updating Gold Package');
        });

        document.getElementById('delete-gold').addEventListener('click', function() {
            alert('Deleting Gold Package');
        });

        document.getElementById('update-platinum').addEventListener('click', function() {
            alert('Updating Platinum Package');
        });

        document.getElementById('delete-platinum').addEventListener('click', function() {
            alert('Deleting Platinum Package');
        });
    </script>
</body>
</html>