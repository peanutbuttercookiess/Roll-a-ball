#pragma strict

var playerSpeed : float; //number variable
var theLoseScreen: GameObject; //gameobject variable

 
function Update () 
{	//movement code
	if (Input.GetKey(KeyCode.UpArrow))
	{
		print('up pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,1) * playerSpeed);
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		print('down pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,-1) * playerSpeed);
	}
	
	if (Input.GetKey(KeyCode.RightArrow))
	{
		print('right pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(1,0,0) * playerSpeed);
	}
	
	if (Input.GetKey(KeyCode.LeftArrow))
	{
		print('left pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(-1,0,0) * playerSpeed);
	}
}

function OnTriggerEnter (theTrigger: Collider)
{
	if(theTrigger.gameObject.tag == "poo") //if we touch a gameobject that is a TRIGGER and has the tag death
	{
		Destroy(this.gameObject);  //destroy player
		theLoseScreen.SetActive(true); //turn on this gameobject
	}
}