#pragma strict

var onGround: boolean;
var playerJump : float;

function Update()
{	
	if (Input.GetKeyDown(KeyCode.Space) && onGround == true)  //if we hit the spacebar AND are on the ground
	{
		print('jump pressed');
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump);
	}
}

function OnCollisionEnter (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		print("onGround");
		onGround = true;
	}
	
	if(theCollision.transform.tag == "bounce")
	{
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 2); //then force it to jumo & multiply that by 2
	}
}

function OnCollisionExit (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		onGround = false;
	}
}