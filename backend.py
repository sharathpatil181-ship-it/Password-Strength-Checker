import re

def check_password_strength(password):

    if len(password) < 8:
        return "weak password: password must be at least 8 characters."

    if not any(char.isdigit() for char in password):
        return "weak password: password must contain at least one digit."

    if not any(char.isupper() for char in password):
        return "weak password: password must contain at least one uppercase letter."

    if not any(char.islower() for char in password):
        return "weak password: password must contain at least one lowercase letter."

    if not re.search(r'[!@#$%^&*.<>?]', password):
        return "weak password: password must contain at least one special character."

    return "strong: Your password is secure."


def password_checker():
    print("welcome to the password strength checker")

    while True:
        password = input("\nenter your password (or type 'exit' to quit): ")

        if password.lower() == "exit":
            print("Thank you for using the Password Strength Checker.")
            break

        result = check_password_strength(password)
        print(result)


if __name__ == "__main__":
    password_checker()

    