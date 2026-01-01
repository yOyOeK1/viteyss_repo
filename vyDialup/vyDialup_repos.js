{
  "apps": [
    {
      "name": "blank_repo_test",
      "type": "dir"
    },
    {
      "name": "blank",
      "type": "dirFromGit",
      "url": "https://github.com/yOyOeK1/oiyshTerminal",
      "subdir": "ySS_calibration/sites/blank"
    },
    {
      "name": "settings1",
      "type": "site",
      "url": "https://github.com/yOyOeK1/viteyss-site-settings1"
    },
    {
      "name": "2qest",
      "type": "site",
      "url": "https://github.com/yOyOeK1/viteyss-site-2qest",
      "deps": {
        "settings1": "0.0.0"
      }
    },
    {
      "name": "hello-world",
      "type": "site",
      "url": "https://github.com/yOyOeK1/viteyss-site-hello-world"
    }
  ]
}
