if (document.querySelectorAll('.answerList')[0].children.length == 3) {
    var array = ['a', 'b', 'c'];
    var scope = angular.element(document.querySelector('.answerList')).scope();
    var numEl = array.indexOf(scope.activityData.correctAnswer.toLowerCase());
    document.querySelectorAll('.answerList')[0].children[numEl].children[0].children[0].click()
    setTimeout(function() {
        document.querySelector('.continueButton').click()
    }, 3000);
} else {
    alert('no');
}
