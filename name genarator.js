
let rand = Math.random()
let first, sec, third
if(rand<0.33)
{
first="daraz"
}
else if(rand<0.66 && rand>=0.33)
{
first="alibaba"
}
else{
first = "ekhnei"
}

rand = Math.random()
if(rand<0.33)
{
sec="enterprise"
}
else if(rand<0.66 && rand>=0.33)
{
sec="express"
}
else{
sec = ".com"
}

rand = Math.random()
if(rand<0.33)
{
third="store"
}
else if(rand<0.66 && rand>=0.33)
{
third="stall"
}
else{
third = "web"
}
console.log(`${first}  ${sec} ${third}`)