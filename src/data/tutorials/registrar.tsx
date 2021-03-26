import React from "react";

import H2 from "../../components/H2";
import { Tutorial } from "../tutorials";
import TutorialPreReqs from "../../components/TutorialPreReqs";

const _: Tutorial = {
  number: 1,
  title: "Domain Registrar",
  content: [
    {
      segment: (
        <p>
          This tutorial will walk you through the process of creating real-world
          Neo Smart Contract using the Neo Blockchain toolkit. We will build a
          blockchain-based domain registration system.
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
            We’ll store all files related to our domain registration service in
            this folder.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <code>
          $ mkdir registrar
          <br />$ cd registrar
        </code>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Load a new Visual Studio Code window, click on “Open Folder” and
            then use the folder selection dialog to create a new folder called{" "}
            <code>registrar</code> and then open that folder:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/01.png"
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
          <code>
            $ neoxp create
            <br />
            Created 1 node privatenet at
            /Users/neo/xyz-token/default.neo-express
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Note: The private keys for the accounts in
            this file are are *not* encrypted.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do not
            use these accounts on MainNet or in any other system where security
            is a concern.
          </code>
          <p>
            Take note of the security warning, a{" "}
            <code>default.neo-express</code> file will have been created that
            contains private keys, but those keys should only be used for local
            testing as they are not securely stored.
          </p>
          <p>You can now run your private blockchain:</p>
          <code>$ neoxp run</code>
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
            use the name <code>registrar.neo-express</code> and save the file in
            the empty <code>registrar</code> folder.
          </p>
          <p>Your screen should now look like this:</p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/04.png"
              alt="VS Code window with a running blockchain"
            />
          </div>
          <p>
            You can dismiss the message about the node being created (take note
            of the security warning, your <code>registrar.neo-express</code>{" "}
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
              src="./static/tutorial-files/registrar/05.png"
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
            Next, we’ll create a wallet to use with our private blockchain. This
            wallet will be used to deploy our smart contract to the blockchain.
            Initially we’ll make domain registration free-of-charge so the owner
            won’t have any involvement after initial deployment (you could
            imagine us later improving the contract to charge fees—in NEO or
            GAS—for domain registration though and have the owner able to redeem
            those fees).
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <code>
          $ neoxp wallet create owner
          <br />
          owner
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;NigW5fvwHWMEzgoeasQTA6fdktXLe8tCsa
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Note: The private keys for the accounts in
          this wallet are *not* encrypted.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do not use
          these accounts on MainNet or in any other system where security is a
          concern.
        </code>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>registrar.neo-express</code> in the Blockchains
            panel and click on the “Create wallet” menu option. When asked for a
            wallet name, type <code>owner</code>. You’ll see a message
            confirming that the wallet was created:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/06.png"
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
        <code>
          $ neoxp transfer GAS 100000 genesis owner
          <br />
          Transfer Transaction
          0x0acc8cab2dd88a3e4c73284a71edc94c77a03db62e46950ee6d42b60e22a9b9d
          submitted
        </code>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>registrar.neo-express</code> in the Blockchains
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
              src="./static/tutorial-files/registrar/07.png"
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
              src="./static/tutorial-files/registrar/08.png"
              alt="VS Code window showing transaction details"
            />
          </div>
        </>
      ),
    },
    {
      segment: (
        <>
          <H2>Meet Alice and Bob</H2>
          <p>
            Let’s create two more wallets so that we can later experiment with
            registering and transferring domains. We’ll call the wallets{" "}
            <code>alice</code> and <code>bob</code> (it is convention when
            describing protocols to name the first two participants Alice and
            Bob!)
          </p>
          <p>
            The steps aliceto create the wallets are exactly the same as
            above—when we created the owner wallet—just with different wallet
            names. Be sure to also transfer some GAS from the{" "}
            <code>genesis</code> wallet to Alice and Bob (as they will need some
            GAS to be able to invoke the registration contract that we will
            create).
          </p>
          <p>
            The wallets that you have created are stored inside the{" "}
            <code>.neo-express</code> configuration file. If you open the file
            you should now see a wallets entry that looks something like this
            (your keys and addresses will be different, though):
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/09.png"
              alt="Configuration file containing new wallets"
            />
          </div>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Your private blockchain should now have exactly three
            transactions—one for each of the transfers of GAS from genesis to{" "}
            <code>owner</code>, <code>alice</code> and <code>bob</code>:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/10.png"
              alt="VS Code window showing 3 transactions"
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
            <code>registrar</code> folder. The folder will contain a single
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
              src="./static/tutorial-files/registrar/11.png"
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
            When asked for the contract name, enter <code>Registration</code>. A
            new file called <code>RegistrationContract.cs</code> will be created
            and opened—this is our smart contract code. It has been
            pre-populated with some example code, but we’ll shortly remove and
            replace most of that…
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
              src="./static/tutorial-files/registrar/13.png"
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
              src="./static/tutorial-files/registrar/15.png"
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
              src="./static/tutorial-files/registrar/14.png"
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
              src="./static/tutorial-files/registrar/16.png"
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
            The <code>RegistrationContract.csproj</code> file is an MS Build C#
            project configuration file; it tells the .NET Core SDK tooling how
            to build your project.
          </p>
          <p>
            The <code>tasks.json</code> file is a Visual Studio Code
            configuration file that will allow you to build your code within
            Visual Studio Code. VS Code will have already built the sample code
            and the various files produced by the build are in the
            <code>Registration/bin/debug/net5.0</code> folder. You can rebuild
            your contract after making changes by choosing the “Run build task…”
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
            <code>dotnet build</code> command within the{" "}
            <code>Registration</code> folder whenever you want to build:
          </p>
          <code>
            $ cd Registration/
            <br />
            $ dotnet build
            <br />
            Microsoft (R) Build Engine version 16.8.3+39993bd9d for .NET
            <br />
            Copyright (C) Microsoft Corporation. All rights reserved.
            <br />
            <br />
            &nbsp;&nbsp;Determining projects to restore...
            <br />
            &nbsp;&nbsp;All projects are up-to-date for restore.
            <br />
            &nbsp;&nbsp;RegistrationContract -&gt;
            /Users/david/temp/registrar/Registration/bin/Debug/net5.0/RegistrationContract.dll
            <br />
            <br />
            Build succeeded.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;0 Warning(s)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;0 Error(s)
            <br />
            <br />
            Time Elapsed 00:00:01.18
          </code>
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
            The <code>RegistrationContract.cs</code> file contains a single
            class; it is called <code>RegistrationContract</code> and extends
            the <code>SmartContract</code> class (from the{" "}
            <code>Neo.SmartContract.Framework</code> package) to signify that it
            is a smart contract. The class has various attributes that are used
            to provide metadata that will be deployed to the Neo blockchain
            along with the contract:
          </p>
          <code>
            [DisplayName("YourName.RegistrationContract")]
            <br />
            [ManifestExtra("Author", "Your name")]
            <br />
            [ManifestExtra("Email", "your@address.invalid")]
            <br />
            [ManifestExtra("Description", "Describe your contract...")]
          </code>
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
            <code>OnNumberChanged</code> event, the <code>MAP_NAME</code>{" "}
            constant and the <code>ChangeNumber</code> and{" "}
            <code>GetNumber</code> methods from the example contract:
          </p>
          <code>
            <pre>{`using System;
using System.ComponentModel;
using System.Numerics;

using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using Neo.SmartContract.Framework.Services.System;

namespace Registration
{
    [DisplayName("djnicholson.RegistrationContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "A domain registration service for Neo blockchains")]
    public class RegistrationContract : SmartContract
    {
    }
}
`}</pre>
          </code>
          <p>
            You can rebuild your contract now to verify that it still builds.
            Our contract doesn’t do anything useful yet, though; next we’ll code
            various methods to make it a fully functional domain registration
            service!
          </p>
        </>
      ),
    },
    {
      segment: (
        <>
          <H2>Domain registration interface</H2>
          <p>
            For this example, we’ll say that a valid domain name is any
            non-empty string consisting only of the characters ‘a’ through ‘z’.
          </p>
          <p>We’ll support the following behaviors:</p>
          <ul>
            <li>
              Anyone can query whether a domain name is already registered (and
              if so, who owns it) using a <code>Lookup</code> method.
            </li>
            <li>
              Any available name can be registered by calling a{" "}
              <code>Register</code> method (signing the transaction as the
              intended owner of the domain).
            </li>
            <li>
              The existing owner of a domain can transfer it to someone else by
              invoking a <code>Transfer</code> method (providing the new owner
              as an argument and signing the transaction as the current owner).
            </li>
            <li>
              The existing owner of a domain can delete their registration by
              invoking a <code>Delete</code> method (signing the transaction as
              the current owner).
            </li>
          </ul>
          <p>
            We’ll also emit an event whenever ownership changes for a domain
            name.
          </p>
          <H2>Helper methods</H2>
          <p>
            First it would be useful to implement a couple of helper methods.
          </p>
          <p>
            The first helper method will implement our validation logic; it will
            determine if an arbitrary string is a valid domain name according to
            our rules and throw an exception if not:
          </p>
          <code>
            <pre>{`static void Validate(string domain)
{
    var domainBytes = domain.ToByteArray();
    for (int i = 0; i < domain.Length; i++)
    {
        if (domainBytes[i] < 'a' || domainBytes[i] > 'z')
        {
            throw new Exception("Domains must only use lowercase a-z characters");
        }
    }

    if (domain.Length == 0)
    {
        throw new Exception("Domains must be non-empty");
    }
}
`}</pre>
          </code>
          <p>
            We’ll often need to know the current owner of a valid domain name,
            so let’s also add a helper method for that. We’ll use contract
            storage to keep track of which domain is owned by which address and
            will arrange for the method to return zero if a domain is
            unregistered.
          </p>
          <code>
            <pre>{`static Neo.UInt160 GetOwner(string domain)
{
    var value = Storage.Get(Storage.CurrentContext, domain);
    if (value == null)
    {
        return Neo.UInt160.Zero;
    }
    else
    {
        return (Neo.UInt160) value;
    }
}`}</pre>
          </code>
          <p>
            We also need to declare the event that we will be emitting whenever
            domain name ownership changes:
          </p>
          <code>
            <pre>{`[DisplayName("ChangeOwner")]
public static event Action<string, Neo.UInt160> OnChangeOwner;
`}</pre>
          </code>
          <H2>Domain name lookup</H2>
          <p>
            Our first operation will allow people to lookup the current owner of
            a domain name (a return value of zero will represent that the domain
            is currently unregistered):
          </p>
          <code>
            <pre>{`public static Neo.UInt160 Lookup(string domain)
{
    Validate (domain);
    return GetOwner(domain);
}`}</pre>
          </code>
          <p>
            Note that we confirm the domain name is valid before doing any
            further processing; we will follow the same pattern for all of our
            contract operations.
          </p>
          <H2>Domain name registration</H2>
          <p>
            Next, we need an operation to allow someone to register an available
            domain name:
          </p>
          <code>
            <pre>{`public static void Register(string domain)
{
    Validate(domain);

    if (!GetOwner(domain).IsZero)
    {
        throw new Exception("Already registered");
    }

    var tx = (Transaction) ExecutionEngine.ScriptContainer;
    Storage.Put(Storage.CurrentContext, domain, tx.Sender);
    OnChangeOwner(domain, tx.Sender);
}`}</pre>
          </code>
          <p>
            Note that we first check that the domain is valid and available. We
            then extract the address used to sign the transaction and update the
            contract storage so the mapping from this domain name to this
            address is persisted.
          </p>
          <H2>Domain name transfer</H2>
          <p>Now we need an operation for transferring domain names:</p>
          <code>
            <pre>{`public static void Transfer(string domain, Neo.UInt160 to)
{
    Validate(domain);

    var owner = GetOwner(domain);
    if (GetOwner(domain).IsZero)
    {
        throw new Exception("Not registered");
    }

    if (!to.IsValid || to.IsZero)
    {
        throw new Exception("Invalid transferee");
    }

    if (!Runtime.CheckWitness(owner))
    {
        throw new Exception("Not authorized");
    }
    
    Storage.Put(Storage.CurrentContext, domain, to);
    OnChangeOwner(domain, to);
}`}</pre>
          </code>
          <p>
            We confirm that the domain is already registered, then we make sure
            that the destination address is valid and the signer of the
            transaction is the current owner of the domain name. If all these
            checks pass we update our contract storage and emit our ownership
            change event.
          </p>
          <H2>Domain name deletion</H2>
          <p>
            Finally, we need an operation for domain name owners to delete their
            registration:
          </p>
          <code>
            <pre>{`public static void Delete(string domain)
{
    Validate(domain);

    var owner = GetOwner(domain);
    if (owner.IsZero)
    {
        throw new Exception("Not registered");
    }

    if (!Runtime.CheckWitness(owner))
    {
        throw new Exception("Not authorized");
    }

    Storage.Delete(Storage.CurrentContext, domain);
    OnChangeOwner(domain, Neo.UInt160.Zero);
}`}</pre>
          </code>
          <p>
            We check that the domain is currently registered and the person it
            is registered to has signed the transaction; we then remove the
            relevant item from storage and emit our ownership change event
            (using an address of zero to signify that the domain has become
            available again).
          </p>
          <p>
            Now we’re ready to deploy our contract to our private Neo
            blockchain!
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
            <code>RegistrationContract.nef</code>; this contains the N3 Virtual
            Machine bytecode for your contract and is required for deployment.
            You can deploy your contract to your private blockchain as follows:
          </p>
          <code>
            $ neoxp contract deploy
            Registration/bin/Debug/net5.0/RegistrationContract.nef owner
            <br />
            Deployment Transaction
            0xc5f6b16350427e4bf0dfa01fc939ac192df45e39e703e60cd08db5c1a37e17a5
            submitted
          </code>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>registrar.neo-express</code> in the Blockchains
            panel and click on the “Deploy contract” menu option. When asked
            which account to use, select the “owner” wallet that you created
            earlier. When asked which contract to deploy, select{" "}
            <code>RegistrationContract.nef</code> (this file contains the Neo
            Virtual Machine bytecode for your contract). You’ll see a message
            confirming that the deployment transaction was submitted:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/17.png"
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
              src="./static/tutorial-files/registrar/18.png"
              alt="Deployment transaction showing within VS Code"
            />
          </div>
          <p>
            You’ll notice that this transaction is somewhat larger than the
            transactions that we created earlier (when transferring GAS between
            accounts), that’s because this transaction contains the entire
            bytecode for your contract and all of its associated metadata! You
            can actually see the metadata in text format within the Block
            Explorer panel.
          </p>
        </>
      ),
    },
    {
      segment: (
        <>
          <p>
            Your contract has now been deployed to your own private Neo
            blockchain. Next, we’ll experiment with registering some domains…
          </p>
          <H2>Registering a domain</H2>
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
          <code>
            <pre>{`[
  {
    "contract": "djnicholson.RegistrationContract",
    "operation": "register",
    "args": [ "widgets" ]
  }
]`}</pre>
          </code>
          <p>
            Save the file as <code>alice-registration.neo-invoke.json</code> and
            then run the following command:
          </p>
          <code>
            $ neoxp contract invoke alice-registration.neo-invoke.json alice
            <br />
            Invocation Transaction
            0xdbf3fa71a74fa0676d7513ded2e2f18ea6cf5b9f022a9b008b9b05bc36865217
            submitted
          </code>
          <p>
            This command submits a transaction to your private blockchain that
            invokes all of the steps in the invoke file (only one step in our
            case) using Alice’s wallet.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Right click on <code>registrar.neo-express</code> in the Blockchains
            panel and click on the “Invoke contract” menu option. A new invoke
            file will be created for you and saved as{" "}
            <code>invoke-files/Untitled.neo-invoke.json</code>. By convention,
            invoke files use the <code>.neo-invoke.json</code> file extension,
            but you can rename the file to something more meaningful (e.g.{" "}
            <code>alice-registration.neo-invoke.json</code>) if you wish.
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/19.png"
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
              src="./static/tutorial-files/registrar/20.png"
              alt="Selecting a contract"
            />
          </div>
          <p>
            Select your <code>RegistrationContract</code>, and then click into
            the “Operation” text box; you’ll see a list of all operations on
            your contract:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/21.png"
              alt="Selecting an operation"
            />
          </div>
          <p>
            Select the “register” operation. You’ll notice that new text boxes
            appear for each of the arguments to the register method. Once filled
            out, your invoke file will look something like this:
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/22.png"
              alt="Completed invocation file"
            />
          </div>
          <p>
            Click the “Run this step” button to invoke your contract and when
            prompted choose Alice’s account. You’ll see a “Transactions” pane
            appear within the invoke file editor, this shows you the most recent
            transactions that you have submitted using this editor window and
            there will only be one transaction right now. The transaction will
            initially show as “pending” and then change to "confirmed" when your
            transaction is included in a block (within 15 seconds).
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "100%" }}
              src="./static/tutorial-files/registrar/23.png"
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
              src="./static/tutorial-files/registrar/24.png"
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
            Congratulations, you just registered your first domain!{" "}
            <code>widgets</code> is now owned by Alice!
          </p>
          <H2>Transferring a domain</H2>
          <p>Next let’s have Alice transfer the widgets domain to Bob.</p>
          <p>
            Create a new invoke file called{" "}
            <code>alice-to-bob-transfer.neo-invoke.json</code> and populate it
            as follows:
          </p>
          <code>
            <pre>{`[
  {
    "contract": "djnicholson.RegistrationContract",
    "operation": "transfer",
    "args": [ "widgets", "@bob" ]
  }
]`}</pre>
          </code>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "100%" }}
            src="./static/tutorial-files/registrar/25.png"
            alt="New invoke file"
          />
        </div>
      ),
    },
    {
      segment: (
        <>
          <p>
            Note that you can refer to wallet address in invoke files by
            prefixing the wallet name with an ‘@’ character.
          </p>
          <p>
            Now run this invoke file the same was as before (again using Alice’s
            account to submit the transaction). Now Bob own’s the domain{" "}
            <code>widgets</code>!
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "100%" }}
            src="./static/tutorial-files/registrar/26.png"
            alt="Transfer transaction showing in VS Code"
          />
        </div>
      ),
    },
    {
      segment: (
        <p>
          You can verify this by trying to run the same invoke file again and
          verifying that the transaction results in an error (Alice is no longer
          the owner so our smart contract throws an exception).
        </p>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <div style={{ textAlign: "center" }}>
          <img
            style={{ maxWidth: "100%" }}
            src="./static/tutorial-files/registrar/27.png"
            alt="Error upon re-running the transaction"
          />
        </div>
      ),
    },
    {
      segment: (
        <>
          <H2>Deleting a domain</H2>
          <p>
            Finally, let’s delete the <code>widgets</code> domain.
          </p>
          <p>
            Create a new invoke file called{" "}
            <code>delete-widgets.neo-invoke.json</code> and populate it as
            follows:
          </p>
          <code>
            <pre>{`[
  {
    "contract": "djnicholson.RegistrationContract",
    "operation": "delete",
    "args": [ "widgets" ]
  }
]`}</pre>
          </code>
          <p>
            Now run this invoke file the same was as before, but this time use
            Bob’s account to submit the transaction. Now nobody own’s the domain
            <code>widgets</code> and it is available for registration again!
          </p>
          <H2>Exercise for the reader</H2>
          <p>
            Our contract allows anyone to register any domain free-of-charge (as
            long as they have enough GAS to pay to submit the invocation
            transactions). In a real-world you may want to charge fees when a
            user registers a domain; people could pay these fees in NEO, GAS or
            indeed any other NEP-17 asset.
          </p>
          <p>
            As an exercise, you can modify the <code>RegistrationContract</code>{" "}
            to support this functionality: You can add an <code>OnPayment</code>{" "}
            method to your contract that will be called whenever someone pays
            assets to the contract. The <code>OnPayment</code> method provides
            the sender and amount of funds as arguments, you can determine what
            asset was paid by inspecting the{" "}
            <code>ExecutionEngine.CallingScriptHash</code> property provided by
            the runtime and you could make use of the optional <code>data</code>{" "}
            argument to allow the user to specify which name they would like to
            register. Within your <code>OnPayment</code> method you can reject
            the transaction—e.g., if the domain is unavailable or not enough
            funds were paid—by throwing an exception.
          </p>
          <H2>Source code listing</H2>
          <p>Here is the complete smart contract source code:</p>
          <code>
            <pre>{`using System;
using System.ComponentModel;
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Services.Neo;
using Neo.SmartContract.Framework.Services.System;

namespace Registration
{
    [DisplayName("djnicholson.RegistrationContract")]
    [ManifestExtra("Author", "David Nicholson")]
    [ManifestExtra("Email", "david@djntrading.com")]
    [ManifestExtra("Description", "A domain registration service for N3 blockchains")]
    public class RegistrationContract : SmartContract
    {
        [DisplayName("ChangeOwner")]
        public static event Action<string, Neo.UInt160> OnChangeOwner;

        static void Validate(string domain)
        {
            var domainBytes = domain.ToByteArray();
            for (int i = 0; i < domain.Length; i++)
            {
                if (domainBytes[i] < 'a' || domainBytes[i] > 'z')
                {
                    throw new Exception("Domains must only use lowercase a-z characters");
                }
            }

            if (domain.Length == 0)
            {
                throw new Exception("Domains must be non-empty");
            }
        }

        static Neo.UInt160 GetOwner(string domain)
        {
            var value = Storage.Get(Storage.CurrentContext, domain);
            if (value == null)
            {
                return Neo.UInt160.Zero;
            }
            else
            {
                return (Neo.UInt160) value;
            }
        }

        public static Neo.UInt160 Lookup(string domain)
        {
            Validate (domain);
            return GetOwner(domain);
        }

        public static void Register(string domain)
        {
            Validate (domain);

            if (!GetOwner(domain).IsZero)
            {
                throw new Exception("Already registered");
            }

            var tx = (Transaction) ExecutionEngine.ScriptContainer;
            Storage.Put(Storage.CurrentContext, domain, tx.Sender);
            OnChangeOwner(domain, tx.Sender);
        }

        public static void Transfer(string domain, Neo.UInt160 to)
        {
            Validate (domain);

            var owner = GetOwner(domain);
            if (GetOwner(domain).IsZero)
            {
                throw new Exception("Not registered");
            }

            if (!to.IsValid || to.IsZero)
            {
                throw new Exception("Invalid transferee");
            }

            if (!Runtime.CheckWitness(owner))
            {
                throw new Exception("Not authorized");
            }

            Storage.Put(Storage.CurrentContext, domain, to);
            OnChangeOwner (domain, to);
        }

        public static void Delete(string domain)
        {
            Validate (domain);

            var owner = GetOwner(domain);
            if (owner.IsZero)
            {
                throw new Exception("Not registered");
            }

            if (!Runtime.CheckWitness(owner))
            {
                throw new Exception("Not authorized");
            }

            Storage.Delete(Storage.CurrentContext, domain);
            OnChangeOwner(domain, Neo.UInt160.Zero);
        }
    }
}`}</pre>
          </code>
        </>
      ),
    },
  ],
};

export default _;
