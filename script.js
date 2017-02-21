<script>
    var myApp = angular.module('myApp', []);

    myApp.controller('myController', ['$scope', function ($errands) {
            $errands.add = function ()
            {
                if (angular.isDefined($errands.item) && $errands.item != '')
                {
                    // ADD A NEW ELEMENT.
                    $errands.list.push({ item: $errands.item });

                    // CLEAR THE FIELDS.
                    $errands.item = '';

                }
            }
        }]
    );
</script>
