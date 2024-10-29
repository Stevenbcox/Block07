let comment = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
let combone = "The first number is : 100 / 5." ;
let combtwo = "The second number is : 80 - 40." ;
let combthree = "The third number is : 20 + 19." ;

// alert( comment + " " + combone + " " + combtwo + " " + combthree);

document.addEventListener("DOMContentLoaded", () => {
    const dialogs = [
        { button: "button1", dialog: "dialog1", close: "close1" },
        { button: "button2", dialog: "dialog2", close: "close2" },
        { button: "button3", dialog: "dialog3", close: "close3" },
    ];

    dialogs.forEach(({ button, dialog, close }) => {
        const btn = document.getElementById(button);
        const dlg = document.getElementById(dialog);
        const cls = document.getElementById(close);

        btn.addEventListener("click", () => dlg.showModal());
        cls.addEventListener("click", () => dlg.close());
    });
});


