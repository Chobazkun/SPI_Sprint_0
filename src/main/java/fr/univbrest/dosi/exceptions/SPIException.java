/**
 * 
 */
package fr.univbrest.dosi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Chobaz
 *
 * 16 févr. 2017
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SPIException extends RuntimeException
{
	private static final long serialVersionUID = 2695078381945287497L;

	public SPIException(String errorMessage)
	{
		super(errorMessage);
	}
}
