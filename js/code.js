
const showMessage = () => 
              {
                alert("Hello!");

              }

              const likeButton = document.getElementsByClassName("heart");
              likeButton[0].addEventListener("click",showMessage);
              {
                let currentCount = likeButton.nextSibling.txtContent.trim
                newCount = parseInt(currentCount) +1
                likeButton.nextSiblinga.txtContent = newCount
              };