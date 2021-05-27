import React from "react";

import H2 from "../../components/H2";
import { Tutorial } from "../tutorials";
import TutorialPreReqs from "../../components/TutorialPreReqs";

const _: Tutorial = {
  number: 2,
  title: "Real-world Tokens: Building and deploying a NEP-17 Token",
  content: [
    {
      segment: (
        <p>
          This tutorial will walk you through the process of creating real-world
          Neo Smart Contract using the Neo Blockchain toolkit. We will create a
          NEP-17 token;{" "}
          <a href="https://docs.neo.org/v3/docs/en-us/develop/write/nep17.html">
            NEP-17
          </a>{" "}
          is a token standard that specifies a general mechanism for tokenizing
          an asset on the Neo 3 blockchain.
        </p>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: <TutorialPreReqs mode="ui" />,
    },
    {
      onlyRelevantFor: "cmd",
      segment: <TutorialPreReqs mode="cmd" />,
    },
    {
      segment: (
        <>
          <H2>Create a private blockchain</H2>
          <p>
            First, we’ll create a new empty folder—registrar—for our project.
            We’ll call our fictional token “XYZ” and store all files related to
            the token in a folder called <code>xyz-token</code>.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <pre>
          {`$ mkdir xyz-token
$ cd xyz-token`}
        </pre>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Load a new Visual Studio Code window, click on “Open Folder” and
            then use the folder selection dialog to create a new folder called{" "}
            <code>xyz-token</code> and then open that folder:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/01.png"
              alt="VS Code window with a new empty folder opened"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <p>
          The first thing we will do is use Neo Express to create a private
          blockchain. This will allow us to deploy and invoke our contract while
          we are developing it without spending any real GAS.
        </p>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <pre>
            {`$ neoxp create
Created 1 node privatenet at
/Users/neo/xyz-token/default.neo-express
    Note: The private keys for the accounts in this file are are *not* encrypted.
          Do not use these accounts on MainNet or in any other system where security is a concern.`}
          </pre>
          <p>
            Take note of the security warning, a{" "}
            <code>default.neo-express</code> file will have been created that
            contains private keys, but those keys should only be used for local
            testing as they are not securely stored.
          </p>
          <p>You can now run your private blockchain:</p>
          <pre>$ neoxp run</pre>
          <p>
            In your terminal you’ll see the console output from Neo Express and
            will notice that about once every 15 seconds a new block is added to
            your blockchain. If you press Ctrl+C or close the terminal, you’re
            blockchain will stop. For now, leave Neo Express running and open a
            new terminal for the subsequent steps.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Click the N3 icon in the tool bar to open the N3 Visual DevTracker:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/02.png"
              alt="N3 icon"
            />
          </div>
          <p>
            Next, use the button in the Quick Start panel to create a new Neo
            Express Instance:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/03.png"
              alt="Quick Start panel"
            />
          </div>
          <p>
            (Alternatively, you could select the “Create private blockchain”
            menu option from the context menu in the Blockchains panel.)
          </p>
          <p>
            You’ll be asked how many consensus nodes that you want your private
            blockchain to have. For this example, one node is sufficient and
            will enable us to get the most out of Neo Express (some
            functionality—such as creating checkpoints—is disabled for
            multi-node blockchains).
          </p>
          <p>
            When asked for a filename for the Neo Express configuration, we’ll
            use the name <code>xyz-token.neo-express</code> and save the file in
            the empty <code>xyz-token</code> folder.
          </p>
          <p>Your screen should now look like this:</p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/02.png"
              alt="VS Code window with a running blockchain"
            />
          </div>
          <p>
            You can dismiss the message about the node being created (take note
            of the security warning, your <code>xyz-token.neo-express</code>{" "}
            file will contain private keys, but those keys should only be used
            for local testing as they are not securely stored). You can also
            close the Terminal panel showing Neo Express output if you wish—your
            blockchain will continue to run in the background and you’ll see new
            blocks appear in the Block Explorer panel about once every 15
            seconds.
          </p>
          <p>
            You can also check the “Hide empty blocks” checkbox so that only
            blocks containing transactions are shown. Initially you’ll only see
            the very first block but this will make it easier to identify our
            transactions later.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/03.png"
              alt="VS Code window after dismissing other output"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <H2>Create a wallet</H2>
          <p>
            Next, we’ll create a wallet to use with our private blockchain.
            We'll use this wallet to deploy our smart contract to the
            blockchain, and will write the smart contract code so that the XYZ
            tokens minted when the contract is first deployed are transferred to
            the wallet that performed the deployment.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <pre>
          {`$ neoxp wallet create owner
owner
    NgP2WUaoLPyjcKwzRoBXJB5zxuXt8jts6u
    Note: The private keys for the accounts in this wallet are *not* encrypted.
          Do not use these accounts on MainNet or in any other system where security is a concern.`}
        </pre>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>xyz-token.neo-express</code> in the Blockchains
            panel and click on the “Create wallet” menu option. When asked for a
            wallet name, type <code>owner</code>. You’ll see a message
            confirming that the wallet was created:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/04.png"
              alt="Wallet creation success message"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            We now have a wallet for the smart contract owner, but that wallet
            doesn’t contain any assets. Deploying a smart contract to a Neo
            blockchain has a fee associated with it; the fee varies based on the
            size of the contract but is always paid in GAS.
          </p>
          <p>
            Each Neo Express instance has a special wallet called “genesis” that
            is initially given the entire supply of NEO and GAS (the two assets
            native to the Neo blockchain). Let’s transfer some GAS from the
            genesis wallet to our owner wallet.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <pre>
          {`$ neoxp transfer GAS 100000 genesis owner
Transfer Transaction 0x9a636b76b0e4a251dbd6211fd0a354d0b02c4b27d022aecbb985c4f8eec65f82 submitted`}
        </pre>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>xyz-token.neo-express</code> in the Blockchains
            panel and click on the “Transfer assets” menu option. When prompted,
            select GAS as the asset. Enter 100,000 as the amount to transfer
            (this is more than enough to do multiple deployments of the contract
            we will later develop). Choose “genesis” as the source wallet and
            “owner” for the destination. You’ll see a message confirming that
            the transfer transaction was submitted:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/05.png"
              alt="Transfer success message"
            />
          </div>
          <p>
            Shortly after you’ll see a new non-empty block appear in your Block
            Explorer panel. You can click on that block to see a list of
            transactions in the block (there will only be one). You can click on
            the transaction to see the details.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/06.png"
              alt="VS Code window showing transaction details"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <H2>Create a contract</H2>
          <p>Now we’re ready to write the code for our smart contract.</p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <p>
            We’ll use Visual Studio Code to write the code for our smart
            contract. Load a new VS Code window and open your{" "}
            <code>xyz-token</code> folder. The folder will contain a single
            file—<code>default.neo-express</code>—that was created by Neo
            Express to store your private blockchain configuration.
          </p>
          <p>
            Click the N3 icon in the tool bar to open the N3 Visual DevTracker:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/02.png"
              alt="N3 icon"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/07.png"
              alt="VS Code window with the registrar folder opened"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Click the “Create a new contract” button in the Quick Start panel:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/12.png"
              alt="Quick Start panel"
            />
          </div>
          <p>
            (Alternatively, you could select the “Create contract” menu option
            from the context menu in the Blockchains panel.)
          </p>
          <p>
            When asked which programming language you would like to use, select{" "}
            <code>csharp</code>.
          </p>
          <p>
            When asked for the contract name, enter <code>XyzToken</code>. A new
            file called <code>XyzToken.cs</code> will be created and opened—this
            is our smart contract code. It has been pre-populated with some
            example code, but we’ll shortly remove and replace most of that…
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/08.png"
              alt="VS Code window with sample contract code opened"
            />
          </div>
          <p>
            You can also see in the Explorer pane in VS Code that various other
            files have been created:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/09.png"
              alt="Contract files in the File Explorer"
            />
          </div>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/10.png"
              alt="VS Code window with sample contract code opened"
            />
          </div>
          <p>
            You can also see in the Explorer pane in VS Code that various other
            files have been created:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/11.png"
              alt="Contract files in the File Explorer"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            The <code>XyzToken.csproj</code> file is an MS Build C# project
            configuration file; it tells the .NET SDK tooling how to build your
            project.
          </p>
          <p>
            The <code>tasks.json</code> file is a Visual Studio Code
            configuration file that will allow you to build your code within
            Visual Studio Code. VS Code will have already built the sample code
            and the various files produced by the build are in the{" "}
            <code>XyzToken/bin/debug/net5.0</code> folder. You can rebuild your
            contract after making changes by choosing the “Run build task…”
            option in the “Terminal” menu in VS Code.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <p>
            If you prefer to build using the command-line, you can delete the
            <code>tasks.json</code> file and instead run the{" "}
            <code>dotnet build</code> command within the <code>XyzToken</code>{" "}
            folder whenever you want to build:
          </p>
          <pre>
            {`$ cd XyzToken/
$ dotnet build
Microsoft (R) Build Engine version 16.8.3+39993bd9d for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining projects to restore...
  All projects are up-to-date for restore.
  XyzToken -> /Users/neo/xyz-token/XyzToken/bin/Debug/net5.0/XyzToken.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:01.27`}
          </pre>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Let’s remove the sample code and fill out some contract metadata,
            then we’ll be ready to write our own smart contract code…
          </p>
          <p>
            The <code>XyzTokenContract.cs</code> file contains a single class;
            it is called <code>XyzTokenContract</code> and extends the{" "}
            <code>SmartContract</code> class (from the{" "}
            <code>Neo.SmartContract.Framework</code> package) to signify that it
            is a smart contract. The class has various attributes that are used
            to provide metadata that will be deployed to the N3 blockchain along
            with the contract:
          </p>
          <pre>{`[DisplayName("YourName.XyzTokenContract")]
[ManifestExtra("Author", "Your name")]
[ManifestExtra("Email", "your@address.invalid")]
[ManifestExtra("Description", "Describe your contract...")]`}</pre>
          <p>Let’s replace these with real values…</p>
          <p>
            The <code>DisplayName</code> will be used to refer to your contract
            from within wallet software and other tools, it is common practice
            to provide a string consisting of an identifier for you (e.g. your
            GitHub ID, or company abbreviation) followed by a dot and then the
            contract name.
          </p>
          <p>
            For the <code>ManifestExtra</code> attributes, replace the example
            values with real information. You can also remove the{" "}
            <code>OnNumberChanged</code> event and the <code>ChangeNumber</code>{" "}
            and <code>GetNumber</code> methods from the example contract:
          </p>
          <pre>{`using System;
using System.ComponentModel;
using System.Numerics;

using Neo;
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Native;
using Neo.SmartContract.Framework.Services;

namespace XyzToken
{
    [DisplayName("djnicholson.XyzTokenContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "Controls issuance of the XYZ token")]
    public class XyzTokenContract : SmartContract
    {
      const string MAP_NAME = "XyzTokenContract";
    }
}`}</pre>
          <p>
            You can rebuild your contract now to verify that it still builds.
            Our contract doesn’t do anything useful yet, though; next we’ll code
            the various methods and events mandated by the NEP-17 standards.
          </p>
        </>
      ),
    },
    {
      segment: (
        <>
          <H2>NEP-17 requirements</H2>
          <p>
            The NEP-17 standard mandates that we implement various methods and
            events in our contract:
          </p>
          <ul>
            <li>
              Token information:
              <ul>
                <li>
                  A <code>totalSupply</code> method that returns the total
                  amount of tokens in our contract (initially we’ll use a fixed
                  issuance of 1,000,000 XYZ tokens).
                </li>
                <li>
                  A <code>symbol</code> method that returns the name of our
                  token (“XYZ”).
                </li>
                <li>
                  A <code>decimals</code> method that returns the number of
                  decimals used (we’ll use 8 decimal places).
                </li>
              </ul>
            </li>
            <li>
              Token transfer mechanism:
              <ul>
                <li>
                  A <code>transfer</code> method that allows XYZ tokens to be
                  transferred between Neo wallets.
                </li>
                <li>
                  A <code>balanceOf</code> method that reports the current XYZ
                  token balance for an account.
                </li>
                <li>
                  A <code>Transfer</code> event that will fire whenever tokens
                  are transferred.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            We’ll go through and implement each of the above requirements
            one-by-one…
          </p>
          <H2>Token information methods</H2>
          <p>
            The first few methods that we’ll implement are pretty simple as they
            will all return constant values.
          </p>
          <p>
            Let’s start with TotalSupply, this method returns a BigInteger
            representing the total amount of tokens in our contract. For now,
            we’ll return a constant (we’ll issue 1,000,000 at contract creation
            time) but later we may choose to implement something more complex
            (e.g. allow users to issue and buy tokens using NEO and/or GAS).
            We’ll create a constant for the value 1,000,000 as we will also need
            to refer to the same value later when initializing our contract.
          </p>
          <pre>{`using System;
using System.ComponentModel;
using System.Numerics;

using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using Neo.SmartContract.Framework.Services.System;

namespace XyzToken
{
    [DisplayName("djnicholson.XyzTokenContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "Controls issuance of the XYZ token")]
    public class XyzTokenContract : SmartContract
    {
        const string MAP_NAME = "XyzTokenContract";

        static readonly ulong InitialSupply = 1_000_000;

        public static BigInteger TotalSupply() => InitialSupply;
    }
}`}</pre>
          <p>
            The implementation of Symbol (we’ll return “XYZ”) and Decimals
            (we’ll return 8) will be equally as simple. There’s no need to
            define constants here as we won’t be reusing the same values
            elsewhere; we can just use inline literals:
          </p>
          <pre>{`using System;
using System.ComponentModel;
using System.Numerics;

using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using Neo.SmartContract.Framework.Services.System;

namespace XyzToken
{
    [DisplayName("djnicholson.XyzTokenContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "Controls issuance of the XYZ token")]
    public class XyzTokenContract : SmartContract
    {
        const string MAP_NAME = "XyzTokenContract";

        static readonly ulong InitialSupply = 1_000_000;

        public static BigInteger TotalSupply() => InitialSupply;
        
        public static string Symbol() => "XYZ";

        public static ulong Decimals() => 8;
    }
}`}</pre>
          <p>
            At this stage you should build your contract again to validate that
            you don’t have any syntax errors. However, our contract does not yet
            confirm to the NEP-17 standard; we still need to add support for
            token transfers…
          </p>
          <H2>Token transfer mechanism</H2>
          <p>
            First, we need to implement the <code>Transfer</code> event. The
            NEP-17 standard tells us that we must trigger a{" "}
            <code>Transfer</code> event whenever tokens are transferred. In code
            we’ll call the event <code>OnTransfer</code>—as this is a common
            convention for events in C# code—and we’ll use a{" "}
            <code>DisplayName</code>
            attribute so that the Neo C# compiler knows that this is the{" "}
            <code>Transfer</code>
            event:
          </p>
          <pre>
            {`[DisplayName("Transfer")]
public static event Action<UInt160, UInt160, BigInteger> OnTransfer;`}
          </pre>
          <p>
            We’ll use our contract’s storage to keep track of the XYZ token
            balance for a specific address. This information can be encoded
            using a mapping from addresses to numerical values. In a Neo smart
            contract you can use the <code>StorageMap</code> class to create an
            object which will allow you to lookup values by key (addresses in
            our case) and set a value for a specific key. Any changes made to
            the storage map are persisted and also apply to subsequent contract
            invocations. Let’s add a helper property that we can use anywhere we
            need a reference to our mapping of token balances:
          </p>
          <pre>
            {`private static StorageMap Balances => new StorageMap(Storage.CurrentContext, MAP_NAME);`}
          </pre>
          <p>
            To make our later code a bit cleaner, let’s also add some strongly
            typed methods for getting values out of the map and putting values
            in. We’ll use the <code>UInt160</code> type to represent addresses;
            this is a 160-but unsigned integer that can be safely casted to a
            byte array of length 20 (the length of Neo addresses). We’ll use the{" "}
            <code>BigInteger</code> type to represent token balances.
          </p>
          <pre>
            {`private static BigInteger Get(UInt160 key) => (BigInteger) Balances.Get(key);
private static void Put(UInt160 key, BigInteger value) => Balances.Put(key, value);`}
          </pre>
          <p>
            Now let’s add some helper methods that will allow us to increase or
            reduce the XYZ token balance for a specific address:
          </p>
          <pre>{`private static void Increase(UInt160 key, BigInteger value)
{
    Put(key, Get(key) + value);
}

private static void Reduce(UInt160 key, BigInteger value)
{
    var oldValue = Get(key);
    if (oldValue == value)
    {
        Balances.Delete(key);
    }
    else
    {
        Put(key, oldValue - value);
    }
}`}</pre>
          <p>
            Note that the implementation of <code>Reduce</code> is slightly more
            complicated than <code>Increase</code>, this is because{" "}
            <code>Reduce</code> has an optimization that will slightly reduce
            the cost of invoking the smart contract in a way that reduces a
            balance to zero.
          </p>
          <p>
            We’re finally ready to implement our <code>Transfer</code> method!
            NEP-17 states that the <code>Transfer</code> method has four
            arguments: The sender address, the recipient address, the amount to
            transfer and some optional arbitrary data. There is some validation
            that we need to do for each of the arguments:
          </p>
          <ul>
            <li>
              We need to ensure that the sender and recipient are valid
              addresses (we can use the <code>IsValid</code> extension property
              on the <code>Uint160</code> class for this).
            </li>
            <li>The amount must be greater than or equal to zero.</li>
            <li>
              We need to verify that the transaction was signed by the owner of
              the sender address (we can use the{" "}
              <code>Runtime.CheckWitness(…)</code> helper method provided by the
              Neo Smart Contract Framework for this). However, this validation
              does not apply if the caller is a contract transferring its own
              XYZ tokens (we can use the <code>Runtime.CallingScriptHash</code>
              property to check for this).
            </li>
            <li>
              The sender must have a balance greater than or equal to the amount
              being transferred.
            </li>
          </ul>
          <p>
            Once validation has succeeded, we will perform the transfer (using
            the <code>Increase</code> and <code>Reduce</code> helper methods
            that we already created) and fire the <code>Transfer</code> event.
          </p>
          <p>
            The NEP-17 standard also requires that we check whether the
            recipient address is a contract; if so, we must invoke the{" "}
            <code>onPayment</code> method of that contract (this gives the
            recipient contract the opportunity to abort the transaction if it
            does not want to receive the XYZ tokens). We can use the
            <code>ContractManagement.GetContract(…)</code> method provided by
            the Neo Smart Contract Framework to test for this.
          </p>
          <p>The full implementation of our Transfer method is as follows:</p>
          <pre>{`public static bool Transfer(UInt160 from, UInt160 to, BigInteger amount, object data)
{
    if (!from.IsValid || !to.IsValid)
    {
        throw new Exception("The parameters from and to should be 20-byte addresses");
    }

    if (amount < 0) 
    {
        throw new Exception("The amount parameter must be greater than or equal to zero");
    }

    if (!from.Equals(Runtime.CallingScriptHash) && !Runtime.CheckWitness(from))
    {
        throw new Exception("No authorization.");
    }
    
    if (Get(from) < amount)
    {
        throw new Exception("Insufficient balance");
    }

    Reduce(from, amount);
    Increase(to, amount);
    OnTransfer(from, to, amount);

    if (ContractManagement.GetContract(to) != null)
    {
        Contract.Call(to, "onPayment", CallFlags.None, new object[] { from, amount, data });
    }
    
    return true;
}`}</pre>
          <p>
            The NEP-17 standard also requires that we provide a contract method
            to retrieve the token balance for an arbitrary address:
          </p>
          <pre>{`public static BigInteger BalanceOf(UInt160 account)
{
    return Get(account);
}`}</pre>
          <p>
            At this stage you should build your contract again to validate that
            you don’t have any syntax errors. Our contract is now technically
            compliant with the NEP-17 standard! However, it is still not ready
            for use as we don’t yet have any code that performs the initial
            issuance of 1,000,000 XYZ tokens; let’s remedy that…
          </p>
          <H2>Initial issuance</H2>
          <p>
            We need to issue our initial supply of 1,000,000 XYZ tokens whenever
            our contract is deployed to a Neo blockchain for the first time.
            Fortunately, Neo allows you to specify that certain code in a smart
            contract to be executed at deployment time; we do this by creating a
            special <code>_deploy</code> method.
          </p>
          <p>
            The <code>_deploy</code> method will be called at deployment time by
            the Neo Virtual Machine and will be passed a Boolean indicating
            whether this is an update or not (this is important to us as we only
            want to issue the initial supply during initial deployment; we
            shouldn’t repeat the issuance if we update our contract).
          </p>
          <p>
            We’ll issue all of the initial XYZ tokens to whichever wallet
            initially deploys the contract. The NEP-17 standard requires that we
            fire the transfer event for this initial allocation also (specifying{" "}
            <code>null</code> for the sender address).
          </p>
          <p>The code for the deploy method will look like this:</p>
          <pre>{`[DisplayName("_deploy")]
public static void Deploy(object data, bool update)
{
    if (!update)
    {
        var tx = (Transaction) Runtime.ScriptContainer;
        var owner = (Neo.UInt160) tx.Sender;
        Increase(owner, InitialSupply);
        OnTransfer(null, owner, InitialSupply);
    }
}`}</pre>
          <p>
            At this stage you should build your contract again to validate that
            you don’t have any syntax errors. Our contract is now ready to be
            deployed!
          </p>
          <H2>Contract deployment</H2>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <p>
            When you build your smart contract code, one of the files emitted is
            <code>XyzToken.nef</code>; this contains the N3 Virtual Machine
            bytecode for your contract and is required for deployment. You can
            deploy your contract to your private blockchain as follows:
          </p>
          <pre>
            {`$ neoxp contract deploy XyzToken/bin/Debug/net5.0/XyzToken.nef owner
Deployment Transaction 0x84eb7ece9e7690a33e43a664affb4915f4031a322319c7d937f2dfa6c1017403 submitted`}
          </pre>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>xyz-token.neo-express</code> in the Blockchains
            panel and click on the “Deploy contract” menu option. When asked
            which account to use, select the “owner” wallet that you created
            earlier. When asked which contract to deploy, select{" "}
            <code>XyzToken.nef</code> (this file contains the Neo Virtual
            Machine bytecode for your contract). You’ll see a message confirming
            that the deployment transaction was submitted:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/12.png"
              alt="Deployment success message"
            />
          </div>
          <p>
            Shortly after you’ll see a new non-empty block appear in your Block
            Explorer panel. You can click on that block to see a list of
            transactions in the block (there will only be one). You can click on
            the transaction to see the details.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/13.png"
              alt="Deployment transaction showing within VS Code"
            />
          </div>
          <p>
            You’ll notice that this transaction is somewhat larger than the
            transactions that we created earlier (when transferring GAS from the
            genesis account to the owner account), that’s because this
            transaction contains the entire bytecode for your contract and all
            of its associated metadata! You can actually see the metadata in
            text format within the Block Explorer panel.
          </p>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Your contract has now been deployed to your own private Neo
            blockchain. Next, we’ll experiment with transferring some assets…
          </p>
          <H2>Meet Alice</H2>
          <p>
            Before we continue, let’s create one additional wallet so that we
            can simulate multiple people transferring XYZ tokens between each
            other. We’ll call this new wallet “alice”. The steps are identical
            to when we created the owner wallet earlier.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <pre>
          {`$ neoxp wallet create alice
alice
  NN4B7wxDBRq9uqjRVwPYYQKDyZSf5AtzVp
  Note: The private keys for the accounts in this wallet are *not* encrypted.
        Do not use these accounts on MainNet or in any other system where security is a concern.`}
        </pre>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>xyz-token.neo-express</code> in the Blockchains
            panel and click on the “Create wallet” menu option. When asked for a
            wallet name, type <code>alice</code>. You’ll see a message
            confirming that the wallet was created:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/14.png"
              alt="Wallet creation success message"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Now that we have a second wallet, let’s transfer some of the
            1,000,000 XYZ tokens that were just issued to Alice…
          </p>
          <H2>Contract invocation</H2>
          <p>
            Neo Express allows you to invoke any contract deployed to your
            private blockchain. To do so, you must provide an “
            <a href="https://github.com/ngdenterprise/design-notes/blob/master/NDX-DN12%20-%20Neo%20Express%20Invoke%20Files.md">
              invoke file
            </a>
            ”; an invoke file is a JSON file that specifies one or more contract
            methods that should be invoked.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <>
          <p>Create a new text file and paste the following JSON into it:</p>
          <pre>{`[
  {
    "contract": "djnicholson.XyzTokenContract",
    "operation": "transfer",
    "args": [ "@owner", "@alice", 10, "none" ]
  }
]`}</pre>
          <p>
            Save the file as <code>owner-to-alice.neo-invoke.json</code> and
            then run the following command:
          </p>
          <pre>
            {`$ neoxp contract invoke owner-to-alice.neo-invoke.json owner
Invocation Transaction 0xdbf3fa71a74fa0676d7513ded2e2f18ea6cf5b9f022a9b008b9b05bc36865217 submitted`}
          </pre>
          <p>
            This command submits a transaction to your private blockchain that
            invokes all of the steps in the invoke file (only one step in our
            case) using the owner wallet.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>xyz-token.neo-express</code> in the Blockchains
            panel and click on the “Invoke contract” menu option. A new invoke
            file will be created for you and saved as{" "}
            <code>invoke-files/Untitled.neo-invoke.json</code>. By convention,
            invoke files use the <code>.neo-invoke.json</code> file extension,
            but you can rename the file to something more meaningful (e.g.{" "}
            <code>owner-to-alice.neo-invoke.json</code>) if you wish.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/15.png"
              alt=""
            />
          </div>
          <p>
            Invoke files can consist of multiple “steps”. The file created for
            you currently has one step, but all of the fields are currently
            empty. Let’s fill them out… Click into the first field and you will
            see a dropdown that lists all known contracts on your private
            blockchain:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/16.png"
              alt="Selecting a contract"
            />
          </div>
          <p>
            Select your <code>XyzTokenContract</code>, and then click into the
            “Operation” text box; you’ll see a list of all operations on your
            contract:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/17.png"
              alt="Selecting an operation"
            />
          </div>
          <p>
            Select the “transfer” operation. You’ll notice that new text boxes
            appear for each of the arguments to the transfer method. Let's fill
            those out…
          </p>
          <p>
            Neo Express allows you to refer to wallets by name, to do so you
            prefix the wallet name with an “@” symbol. Your invoke file will
            look something like this:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/18.png"
              alt="Completed invocation file"
            />
          </div>
          <p>
            Click the “Run this step” button to invoke your contract and when
            prompted choose the owner account. You’ll see a “Transactions” pane
            appear within the invoke file editor, this shows you the most recent
            transactions that you have submitted using this editor window and
            there will only be one transaction right now. The transaction will
            initially show as “pending” and then change to “confirmed” when your
            transaction is included in a block (within 15 seconds).
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/19.png"
              alt="Invocation transaction created"
            />
          </div>
          <p>
            You can click on the transaction to see the same details that you
            would see if you found your transaction in the Block Explorer:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/nep17/20.png"
              alt="Invocation transaction details"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Congratulations, you just transferred XYZ tokens from the owner to
            Alice!
          </p>
          <H2>Exercise for the reader</H2>
          <p>
            Our contract has a fixed total supply of XYZ tokens—we mint
            1,000,000 tokens at deployment time and then no more tokens are ever
            created. In a real-world scenario you may want to allow people to
            purchase tokens and mint new tokens as and when they are purchased.
          </p>
          <p>
            As an exercise, you can modify the <code>XyzTokenContract</code> to
            support this functionality: Use contract storage (instead of a
            constant in the code) to record the total supply of XYZ tokens and
            then allow people to issue new XYZ tokens by paying a certain amount
            of NEO or GAS to the contract.
          </p>
          <H2>Source code listing</H2>
          <p>Here is the complete smart contract source code:</p>
          <pre>{`using System;
using System.ComponentModel;
using System.Numerics;

using Neo;
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Native;
using Neo.SmartContract.Framework.Services;

namespace XyzToken
{
    [DisplayName("djnicholson.XyzTokenContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "Controls issuance of the XYZ token")]
    public class XyzTokenContract : SmartContract
    {
        const string MAP_NAME = "XyzTokenContract";

        static readonly ulong InitialSupply = 1_000_000;

        public static BigInteger TotalSupply() => InitialSupply;
        
        public static string Symbol() => "XYZ";

        public static ulong Decimals() => 8;

        [DisplayName("Transfer")]
        public static event Action<UInt160, UInt160, BigInteger> OnTransfer;

        private static StorageMap Balances => new StorageMap(Storage.CurrentContext, MAP_NAME);

        private static BigInteger Get(UInt160 key) => (BigInteger) Balances.Get(key);

        private static void Put(UInt160 key, BigInteger value) => Balances.Put(key, value);

        private static void Increase(UInt160 key, BigInteger value)
        {
            Put(key, Get(key) + value);
        }

        private static void Reduce(UInt160 key, BigInteger value)
        {
            var oldValue = Get(key);
            if (oldValue == value)
            {
                Balances.Delete(key);
            }
            else
            {
                Put(key, oldValue - value);
            }
        }

        public static bool Transfer(UInt160 from, UInt160 to, BigInteger amount, object data)
        {
            if (!from.IsValid || !to.IsValid)
            {
                throw new Exception("The parameters from and to should be 20-byte addresses");
            }

            if (amount < 0) 
            {
                throw new Exception("The amount parameter must be greater than or equal to zero");
            }

            if (!from.Equals(Runtime.CallingScriptHash) && !Runtime.CheckWitness(from))
            {
                throw new Exception("No authorization.");
            }
            
            if (Get(from) < amount)
            {
                throw new Exception("Insufficient balance");
            }

            Reduce(from, amount);
            Increase(to, amount);
            OnTransfer(from, to, amount);

            if (ContractManagement.GetContract(to) != null)
            {
                Contract.Call(to, "onPayment", CallFlags.None, new object[] { from, amount, data });
            }
            
            return true;
        }

        public static BigInteger BalanceOf(UInt160 account)
        {
            return Get(account);
        }

        [DisplayName("_deploy")]
        public static void Deploy(object data, bool update)
        {
            if (!update)
            {
                var tx = (Transaction) Runtime.ScriptContainer;
                var owner = (Neo.UInt160) tx.Sender;
                Increase(owner, InitialSupply);
                OnTransfer(null, owner, InitialSupply);
            }
        }
    }
}`}</pre>
        </>
      ),
    },
  ],
};

export default _;
