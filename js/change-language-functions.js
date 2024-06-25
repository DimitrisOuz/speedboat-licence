var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Άδεια χειριστή ταχυπλόου σκάφους",
      pageTitle: "Άδεια χειριστή ταχυπλόου σκάφους",
      infoTitle: "Πληροφορίες για την χορήγηση Άδειας χειριστή ταχυπλόου σκάφους",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να λάβετε την Άδεια χειριστή ταχυπλόου σκάφους.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 5 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για την Εργασία 5 του μαθήματος Συστήματα Ηλεκτρονικής Διακυβέρνησης από τον φοιτητή του μεταπτυχιακού προγράμματος της Εφαρμοσμένης Πληροφορικής του Πανεπιστημίου Μακεδονίας:",
      student1: "Ουζουνούδη Δημήτρη",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Speedboat Operator's Licence",
      pageTitle: "Speedboat Operator's Licence",
      infoTitle: "Information on obtaining a Speedboat Operator's Licence",
      subTitle1: "This questionnaire can help you determine if you are eligible to obtain a Speedboat Operator's Licence.",
      subTitle2: "Completing the questionnaire should not take more than 5 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This work was developed for Project 5 of the course e-Government Systems by the student of the Master in Applied Informatics of University of Macedonia:",
      student1: "Ouzounoudis Dimitris",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();