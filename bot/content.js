function register() {
    const registrationUrl = 'https://wanted.lol/register';
    const referralCode = 'WANTED-NxCrG1laq6u7';
  
    if (window.location.href === registrationUrl) {
      setTimeout(() => {
        const referralInput = document.querySelector('input[name="referral"]');
        if (referralInput) {
          referralInput.value = referralCode;
        }
  
        setTimeout(() => {
          const registerButton = document.querySelector('[type="submit"]');
          if (registerButton) {
            registerButton.click();
          }
  
          setTimeout(() => {
            window.location.href = registrationUrl;
          }, 1000);
        }, 1000);
      }, 1000);
    } else {
      window.location.href = registrationUrl;
    }
  }
  
  register();
  