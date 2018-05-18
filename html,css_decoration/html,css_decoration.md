# CSS _ UI design part

## how to hide the contents not using display nor visibility

### using clip to hide the content you want 

- 1. using clip
  - only can be usd when its position is fixed or absolute
  - This property is deprecated. Use clip-path instead


- 2. clip-path
  - property creates a clipping region that defines what part of an element should be displayed.
  - url: https://bennettfeely.com/clippy/


## decoration

### box design
- when you have to make line on the box
  - 1. outline
    - doesn't effect at the box size, but can't make only one side of the line. 
  - 2. box-shadow
    - box-shadow: 0px -5px 0px 0px rgb(201, 201, 201);
  - 3. border
    - border-top: 2px solid rgb(18, 18, 18);

### background image sticking 
- https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html
- good to use for parallax-scrolling 
* need to find out the other way i can use for my design work. !important

- background-image: url(images/bg_flower.png);
  background-repeat: no-repeat;
  background-position: 50 0;
  background-attachment: fixed;

### gradient

- background-image: repeating-linear-gradient(-45deg, red 0, red 50px, green 50px, green 100px);
- http://www.colorzilla.com/gradient-editor/

### webfont
 
- Spoqa Han Sans 

### font design 
- px em rem
  - px: fixed size 
  - em: * all of the font size
  - rem: * root html (only)
  - https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
    - Set the root HTML font-size as a percentage. That’s a percentage of the user’s default browser font-size. A typical method is to set the HTML font-size to 62.5%. That’s because 62.5% of 16px (typical default browser font-size) is 10px. That would still make 1.6rem = 16px. This now means that if the user’s default browser font-size is changed to, for example, 20px, 1.6rem would now equal 20px. So if your user wants bigger fonts, let them. Happy designer. Happy developer. All numbers are still easy to work with. The ideal scenario would be to leave the HTML font-size as 100%, but that does make the maths a little bit harder. For example, 16px is now 1rem, 20px is 1.25rem, 24px is 1.5rem etc.

* need to study more about this part so I can give right font size to the user. !important

### using icon font 
- http://fontello.com/

### pseudo class and element
- :hover
- ::before and ::after

### display inline inline-block block

Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.



## using position and inline-block to layout navigation

* need to exsercise to get used to it