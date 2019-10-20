# davids-cohen
static site for Davids & Cohen lawfirm

## Where'd this come from?
This was built for Davids & Cohen, PC by [LawInfo](https://www.lawinfo.com/legal-marketing/). It appears to have been contracted out to some wordpress developer and built using some kinda plugin. When they became unresponsive and wouldn't publish needed updates to the site (e.g. personnel changes), I took matters into my own hands.

![](resources/imthecaptainnow.gif) 

I pulled down the site into static files by running `wget -P /my/local/directory -mpck --user-agent="" -e robots=off --wait 1 -E "http://www.davids-cohen.com"` and then published to my own domain using [surge.sh](https://surge.sh/)
