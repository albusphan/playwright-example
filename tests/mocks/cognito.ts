import { Page } from "@playwright/test";

export function cognitoSuccess(page: Page) {
  return page.route(
    "https://cognito-idp.eu-central-1.amazonaws.com",
    (route) => {
      const body = JSON.parse(route.request().postData() || "");

      if (body?.ChallengeName === "SMS_MFA") {
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          headers: {
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
          body: JSON.stringify({
            AuthenticationResult: {
              AccessToken:
                "eyJraWQiOiJIeWpITTRySFBjR01UY2NcL1owYlBpMzJSbmRpS01abDlVTWdBSWd5dnA0MD0iLCJhbGciOiJSUzI1NiJ9.eyJvcmlnaW5fanRpIjoiNGFjMjM3NGItZDkzNC00NzAyLThkZWItY2RlYmIxZjhiMjQwIiwic3ViIjoiYjcyZjRmOGMtNDk2Yi00OTAwLWE3ZmMtYWIwOWM2MzEwZGFlIiwiZXZlbnRfaWQiOiI1ZTQ3MGY1Ny02Mzk0LTQwNTAtOTFiOC02OTA5YTI4OTVjYjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjUwMjY3NDk2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV85RXduMnMwS0UiLCJleHAiOjE2NTAyNzEwOTYsImlhdCI6MTY1MDI2NzQ5NywianRpIjoiZGQzZjUyMGMtYmNmMC00ZmNlLTkwZjYtMGViOTVkZDdhMDkzIiwiY2xpZW50X2lkIjoiNTQ5NXZjcWVzZjFzcTd1OWlwNXMyOWg5OW8iLCJ1c2VybmFtZSI6IjE1YTU2ODgwLTAzM2QtNDcxZi1hYzY4LWIxMDJjODUwNmU5MCJ9.NAJBwMrNHc1EW7y_8AvVR5idVX6xEZNpyGyUO-ozWGzXDkz2A7-ufJSEkdhNAPcrmw5-7cphqNN-7qAwBCWckSAI2WKge5q_EZQY53E2ScUnP7JBiulGDKZWmzFMN2vSNqILmNyxZXv5okh4PCoksrgqx6Rjyg8n3oHRsOk4AAxvczuYCohHzTDk99YvbSy168BDKfOVJtCbGDA_PtUYLJcdp6t-4bume0sG93gUxeLsPuGZ7S77AtQ3xaP4fAIycnpeWQW3TWeYQwSD4X4L-ej5c4EaMUNV03gKryaJMdQRkRmkNGM6cMM2SO050xA3RlAG3mEM1RDhQD-Z8CajyA",
              ExpiresIn: 3600,
              IdToken:
                "eyJraWQiOiJwWEdPYWU5d0J6YmJGMTl3MDlLNWdGT2Z5VCt2MmdBaEtyalppSHBUZ1VNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiNzJmNGY4Yy00OTZiLTQ5MDAtYTdmYy1hYjA5YzYzMTBkYWUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfOUV3bjJzMEtFIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiMTVhNTY4ODAtMDMzZC00NzFmLWFjNjgtYjEwMmM4NTA2ZTkwIiwiZ2l2ZW5fbmFtZSI6Ik1pbmgiLCJvcmlnaW5fanRpIjoiNGFjMjM3NGItZDkzNC00NzAyLThkZWItY2RlYmIxZjhiMjQwIiwiYXVkIjoiNTQ5NXZjcWVzZjFzcTd1OWlwNXMyOWg5OW8iLCJjb21wYW5pZXMiOiJiOGZkNzcxNS00NjRiLTQ2ZGYtOWU3Zi00NjUyOTNkNzM3NTV8SHVzYW0gQWxxYXphfGFkbWluLDcwMDgzMTkzLTliNzUtNDkyNS1hMzBjLTkxYTQ5ZWUzZWFhYnxIQ01DfGFkbWluIiwiZXZlbnRfaWQiOiI1ZTQ3MGY1Ny02Mzk0LTQwNTAtOTFiOC02OTA5YTI4OTVjYjIiLCJjdXN0b206c2V0dGluZ3NfcGxhY2Vob2xkZXIiOiJ7XCJuZXdQaG9uZU51bWJlclwiOlwiKzQ0NzQ0OTk2NTQ1OVwiLFwibmV3R2l2ZW5OYW1lXCI6XCJNaW5oXCIsXCJuZXdGYW1pbHlOYW1lXCI6XCJQaGFuIE5ld1wifSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUwMjY3NDk2LCJleHAiOjE2NTAyNzEwOTYsImlhdCI6MTY1MDI2NzQ5NiwiZmFtaWx5X25hbWUiOiJQaGFuIE5ldyIsImp0aSI6ImUyYjU4MDczLTllMjMtNDExMC1iOTNlLTJlM2MzOGU1NzhhYiJ9.FuL4w0vjn_MbIvSEl65ByKtXAsfx5qXHRUfcA0u_vATmmZZWUR59O8U10B8-nu1fia0-CZBR-ncEqki_4iZsawvlX8kIj6PsHCB7fNUQ_FkTB4WVCPx4TgYcVJZdy4khAR8UQcFmTpvLqbU8ni88UTB56ppiO-lqKIyTHoiQt3WJZsFfi5nxXEGrxjkA07BO4adCkdCEGWgGe95jG9u5Eve4Vl6bLgeS5qC1hnn9B8s1tOCg6ZA9wZ5-CiKc5eIux4K5XLT38vYUZ2icORBZN27UkxzN5qaLSXRuykTQf3B2ys8wYvqPAJ6zbGif07S09kQI14A-mTuPBFwZbjfzeQ",
              RefreshToken:
                "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.X0o6MIWFNwoInachE5LYpwwakoDTOLBH2xidfKYWJ-VLju7R5Ry0qOK7Ej0ZvLTKV6UJJGYQ2zLE55pKaCYpezzJ0dJC20EK508kYlT0f2jFqNlnBInFB48jnCcUiD4pYFBN217av0obomWJTM0Qp48D9F1nezZEKZ5HFx0icljVGf5hmVGCVyfK64a6Ho_CG5Tj6wcB1zWmUSBm9w9zr4fyL9H2q4-I76DjcdL0my9bA-geaow_6XMbTQT7IPYAEKK2oLsxcisVcOv48fgWvyFrvZyDkY_MzovwO8FcM0YY8tUSDIdEw2SVY_3-tNO72sDjMgAP5S56pQWSkvNXPw.u51VdkdZrU9rz-Id.ldiQR6fpXvKxsf53o--TKh4fUNZ8KwKc-zRS-NJDh_5YSphdd2On6Q1XQpVJNPaI9soD-0K75aa2eyce7sCWC20RiOFwue-sVx-Q3PYVNMpN7BDLhoPMWI31SuBZlGR4PV88PDi0nmabj0ARFodF1CS7l3sUkMWvIpPQyCckt34zK2wzwTKUHoiZDPIGEuV2RV4Z7VzGJo031Pb2tMgzd72WP02miXPc_SMtM7Rd1_P9dFCwVrUsYtWqOBqkrvNLUFUa2qoN6YxbWof5PXVyT3or5XfKhPkSpEcvtTYCGqBGpTO78c1hq0hlOcPm3HsSDki1f-AEBH4LJuenru8an1JKW2dQg9vikQNja1xt7dlZiX3OAEHDyVtvL-ODk3xbPgS58Wgn4eP-Ft0uzN2tae-Pv5YW4W5OY4RgtY3zgDDQLs7V-OhaZPiAZJ10jUQR1CHVQxRAw0JndccIM7komWd_sO9siSI6QORSdWGpFr9vNIF9Smnvn0Eahdv_UyMSIFEJQeJF-h8L6UFa3ETsqBwpUzH810u9gvmS_1rPCSmRKqTsv9ooaiceeZoPH4J4W2XRd1PfTXziGGf9BS4nenewxfc3BN4Q7wp56HUlc-o3WV-x8PBJgC87sN_h2jtU-cu1_q4TwUTFdAxGfej3t42UWLp2BUaERgcFGpZvos62n3OvhwjWaLfZ2lH3TIunOtNz-xp0VicrU3Tc2FKXy08iODDHtLiDTWRQEN2o0lgc03p91XY-xj3NxzpXtm_x6WjHJTWDdgeMA70GSY_B7glF_KrOdmOGW7Ks9W3DbMhTupRsucx-vV0dAmZa1sUMt-MByP7Y8NaYPilCnnCsMlQnACYAEN0YnkgFf0jsQfOCjWmKV-sp6fOmpzUiR3xeeH29pVkKZ03clwdz6hiG2SFOpXMWi3MCfAwBMhd7guB9oWwwa3rcUBeKUcntlUnYTEAOiB9Zwk4wwnwKsM-ur3Nkf5iKZVnITKBm6idXxNrL1Kzy1L3KMupiXRp77M81MwuHMccKt_njxVYR61j56HatJeZVpCB_oDuaUPeBPfqOevzNUPjIoFE0cq0l8OjSCOTedg9xeW_xLd7FaJw3yPFAyvqShUsyELJRcSdkCG1b_1WWAJQ3xHnO0lkszGKsaYcC0Mhc4Uuz3NlEC65Hj1kmt-LNwIJBr-oe4GZ1Bdjl2yLBaIiSgYeg8O5E6P-1cnvzyDqjWzGROKYHRL1xuGTwgtG2wrRXGfXtUccv8RlOv-fbCs1WBi1xY7PAyqo1BaiEs43Jrq7trHLG8o0eg-NnbasggKPJXY_1J9WdTaDsyXyQoak1ai0m_z2NknuTD3p-.tDZ6VR1NbLvpnuuDJiQGIQ",
              TokenType: "Bearer",
            },
            ChallengeParameters: {},
          }),
        });
      }

      if (body?.ChallengeName === "PASSWORD_VERIFIER") {
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          headers: {
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
          body: JSON.stringify({
            ChallengeName: "SMS_MFA",
            ChallengeParameters: {
              CODE_DELIVERY_DELIVERY_MEDIUM: "SMS",
              CODE_DELIVERY_DESTINATION: "+*******3407",
            },
            Session:
              "AYABeLSy4qXph9ChRX2PFxpRaZ0AHQABAAdTZXJ2aWNlABBDb2duaXRvVXNlclBvb2xzAAEAB2F3cy1rbXMATmFybjphd3M6a21zOmV1LWNlbnRyYWwtMTo1OTA0OTA4MDk4NTg6a2V5LzRkMmU1YTdmLTFjZDctNDljOS04ZmFjLTJkOWRjYjVjZWY5ZgC4AQIBAHgmc2zKRkLpOgnyzdELgfswUTrQvbP7yAlDE_CgYbDnrwEY72w4SjfdK35X7UijzPlVAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM5eNLwfw44t5zEHfqAgEQgDu_OL_Hbby0vPRJsBS_0JAh1juXp7IbFAQ8A-Nc4758ICgRSpFEjRUNDySxsJT5p4MHrpEmfbbJHhZ3IQIAAAAADAAAEAAAAAAAAAAAAAAAAABL8hmqxGOb2Djto5nHSwS1_____wAAAAEAAAAAAAAAAAAAAAEAAAIA693vGxDKAcZnB7UMQdIBcDkXDpgDGMnsJDdoTe-yw-d1H7RTdQ5s8_5dPdcETZAacHHbn-AhZkwRsCU_92YMXJ5ag8VBsNFOag8DrjRNUQLH-qusf3OYe__Eh9aARRJpZMQtHbPuDmiuB76ohB8HQ2AE6EOkwhzXeshPLVz1g8tehEqwomZ9wr9FGmkUCDNxDtXBLVI1jII8jnEjWMgCNCvGhVxWPBU2e3G6I2mw4HZWFzkVInc8WmZ6pW9rzKdr3BLv2ef0Ptv6KUj2alfL-DhU2EUjr8fkTuDWA6SKgve9s-0NOflKcu1hpwzhfcjCrGD770_B0MMHroPB70n0YffDe_Xaz6Tp5UZ9N9QT-fJOC260aeNAEIHCOf4kw4iSN1oQdHZBqyQctUzQwJJ1CkLZAqFWhZv_6RTYQI0l2jmbnafrWGme3NgU7swDYNriLgIftu8-GgeTuKS0bc7V538WloOjM6Ig8x6We3o-WfN9CWY50P6yrUr-iqehZEZi63Zn56sNoIPTKbhrqkUNg-YGecZioASfdF1QW7sPM1Bubd_vlHMYz52wEYa5QQB-GSyFWV7K-vx7kVlS8Q7FMPcj5cAwSOfSYZ8aax2PYQvhtgzzsWKzqhWrgF379cpOb6WLp0h9A9otxsDWom9QMb7NYxPnT_GnbUc_PAXqTIYGezb4LulD20JJNdprtJpq",
          }),
        });
      }

      if (body?.AuthFlow === "USER_SRP_AUTH") {
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          headers: {
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
          body: JSON.stringify({
            ChallengeName: "PASSWORD_VERIFIER",
            ChallengeParameters: {
              SALT: "1ebb56dfd5e07895ffa683ea45d8eb47",
              SECRET_BLOCK:
                "/PnRZp0ir6rhfc59yris3jsrZMnUgHVn2qzrRsjMOtJc8RlE5qmARbc0RtN+ccdDqeGVpUopu7vl69BnuDYBdnn29/tIptrMjxkmY56MqQ4rAwJMkNjbcXvZ5M9vHrZWuTerjYH6m59Bn3R0gbcAc9JsATUycyOcwy6DKtVZv2IwLQxQHr32ZjpPrmdEy5Kw0difMoUbnSEJF+Fb4OboFIx5ab/Ec9EL0LiN8xFugw9h8qqiMi+tzXI3rJE1jD1ekZ5TyIcPoPuR61pNcG0LG0N7Dwt0euC58FsAGLVW0QlydEzn/Z7NvRTqwQhg3geor/LUTqv4mh+qay0kORKhmufAeWJGUxKbuNEwVsCNfx2i9zNNY408DkjXZ8rBN4LUUN+Uk2Tc9OXqOzq923NyBLsq80bmROqp6Glsq4OzELsoRaqL50l6LMxkcKKSAc3VBjPKPLFnbKMLrJNGasAS2q12DKrp8r7gtm4yEVdTm7c2ngIW5qVE1zlZRFdAQzZL8p7ydAKIKKvceJDY4XvgVDsPSd1urcFxUjzg9nf+2aE8Xy+Z5KYX0BjbzmHXxtldk3DITlz1oWiPsoI4M3tf4jrA43MBhzQ1Z2x3bTrKp+j/F32T1C9sMpCY6v96T9OMXOdmkVsKp37KUGtYpPnVNIw/cbNEmgD9GGGXRNY5AGxzy9DguWVilX31uOIxNl0cEHbOmuQi9RQfaBwC5NbrVsLdQXi+/StJv+wamxlloHY2MmhCCCPwjKGq6sdZIaBN4c+iB6d257vSlVM5Ri2uQr+Ub5ZJuvkJpcOVszs3eHypsZiwAqeieOMyprNotMOO8XattJXVqKvSgn06KUS0tuB4rFuhUWLnJchOx/aSpJG2rREc5eUcZNkTNyNGprUoOgtMPdU5LHxQXzt4z/NzdG9aapLVVUMRb7i8Bw1HfLFRIerz612XBeIOAD+3hC/27v9dxfkfaQJ8QRGMcRj67koJOWlPhImRzB+QtUwrKKcAHZ8V+RiJvSvtELkHcfibk2TucNBw9meAs96BsiOHoOhgzBmMLDachTenc0NOIpePblRjTfvmVT8RaXMsVmtGn3gWnCYgqlB0l5mM0zL8Al54QmUgwdyTRDGkxbsadUmSDz2X5rOFgsC2wxuKRSH3TzVKTEOQXVWkHeglDFrqRSyH7VmMC+G6xEzF8hLRQt8EH+voN92gdSSFpNBJFz3n4qv7Sk+DXjOD7ChqKD/WKzVSeexfa1odww9nN8fvEoXM6otFyg7h5sBpvzByvZoP2ULWZJ9ME63dLKiHw7rjwXvWFeIb9ukUUqQr4D0tQTohHXwa3D5Y96FF/72bfcnoqReFb6Wtz055zhnCJ2mL9cp2wFJpZHD+uF8+hXgm7Mi4oLpiQEB/MJZi2IJrz1uXhilIaQORi0vgJrRvKQ0FANqdpPyYVICAA/Y5WHV+S9LKRSqLQrS2wPagIW7qPd6UOQ0JFh7YvCKQ1k2EDrpx9OORQQqJDBOq/OSoGVsZ1YSIaV0LJs/PrT3C1MPAiSTT7UDh3xazHj9QfEpEXV+gVNeLC301LNXrhjL6XZ2+BJcq/aTfIqIOzSkOruf7djeWk4PEDfGosmfgyRgX1e/UPXp2PciN/5DSlHkM3qTpfIA98bdYRrgJDcmgNJw7205niB2p5bp7SOjDpH8jQwDU90L8bSXMY/3usz0kHCcBxdqNTnpY16Vi5TSH",
              SRP_B:
                "d0bd7b8eb7fcfe227e9559ede4943de479f72acf1b984a6f67d32277f64b01333f9ea4bfb2b35f596e2d3326a660eac2814153e78d7e65ac9b0063834b0f2565c2c75e9248789bb6ef36437bcf022b1f156ebc4917133278009186357a3e73cb87dd3f69fa38319d4824b28b58f39056ed3b7171ab12467a8ada5a7d2d9ba1d3813ddd8597b396a6f248bbabbf79b4dd88cad6972699e77a934abd053324b7656eec2904cc529344bc9e071fdcac9212db5d64570d9d5f00d88362c3f002bf4dc0c251d0880c26a4eb530755800c827af3a96a15563a2d900ab2d1348796e1d72a70b07b7ff684a6392fbc3aac5ca0aa1129fe8a91db029bb568379ec9fef2c9ea4a1dd4afc3e619ca47eccd4f6db31884a2e7d2033b05ffb756b0b5da8af6de9abb39be938e9234eaf392e7bdb648e021f5c7d9c043d7616ed3ac24755dbdafbe3746b5877fbadb321e354054ebfd0babdf2c5bf045ca4259d1b590b112954851d81a22b54062331e83fd15191b25451aa81f3689c25250bb2842dc1999aded",
              USERNAME: "15a56880-033d-471f-ac68-b102c8506e90",
              USER_ID_FOR_SRP: "15a56880-033d-471f-ac68-b102c8506e90",
            },
          }),
        });
      }

      return route.fulfill();
    }
  );
}
